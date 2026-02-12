"use client";

import { useEffect, useMemo, useState } from "react";
import jsPDF from "jspdf";
import imageCompression from "browser-image-compression";
import { Upload, FileText, Trash2, Download, Plus, RotateCw, Settings, Eye, X, FileDigit } from "lucide-react";

export default function PdfClient() {
  const [images, setImages] = useState<{ file: File; rotation: number; id: string }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // New State for Unit Selection
  const [targetSize, setTargetSize] = useState<number | string>(2); 
  const [unit, setUnit] = useState<"KB" | "MB">("MB");

  const [statusText, setStatusText] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const imageUrls = useMemo(
    () => images.map((img) => ({ id: img.id, url: URL.createObjectURL(img.file) })),
    [images]
  );
  const imageUrlMap = useMemo(() => {
    const map = new Map<string, string>();
    imageUrls.forEach((item) => map.set(item.id, item.url));
    return map;
  }, [imageUrls]);

  useEffect(() => {
    return () => {
      imageUrls.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [imageUrls]);

  // --- CALCULATE LIMITS ---
  const totalTargetMB = unit === "KB" ? Number(targetSize) / 1024 : Number(targetSize);
  // We allocate space per page. We reserve 10% buffer for PDF overhead.
  const mbPerPage = images.length > 0 ? (totalTargetMB * 0.9) / images.length : 0;

  // --- PRESETS FOR EXAMS ---
  const presets = [
    { label: "500 KB (SSC)", value: 500, unit: "KB" },
    { label: "2 MB (UPSC)", value: 2, unit: "MB" },
    { label: "5 MB (Email)", value: 5, unit: "MB" },
    { label: "10 MB (High)", value: 10, unit: "MB" },
  ];
  
  const getQualityLabel = () => {
    if (images.length === 0) return { text: "Add images to calculate quality", color: "text-gray-400" };
    
    // Logic: If we have to squeeze a page into < 50KB, it looks bad.
    if (mbPerPage > 0.5) return { text: "Quality: Excellent (High Res) ", color: "text-green-600" };
    if (mbPerPage > 0.2) return { text: "Quality: Good (Readable) OK", color: "text-blue-600" };
    if (mbPerPage > 0.05) return { text: "Quality: Low (Strict Limits) !", color: "text-orange-600" };
    return { text: "Quality: Risk of Blur (Too many pages for this size) X", color: "text-red-600" };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        file,
        rotation: 0,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setImages((prev) => [...prev, ...newFiles]);
    }
  };

  const removeImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const rotateImage = (id: string) => {
    setImages(
      images.map((img) =>
        img.id === id ? { ...img, rotation: (img.rotation + 90) % 360 } : img
      )
    );
  };

  const handlePresetClick = (presetVal: number, presetUnit: string) => {
    setTargetSize(presetVal);
    setUnit(presetUnit as "KB" | "MB");
  };

  // --- COMPRESSION LOGIC ---
  const compressSingleImage = async (imageItem: { file: File; rotation: number }) => {
    // Safety: Ensure we don't try to compress to 0MB
    const safeMB = mbPerPage < 0.02 ? 0.02 : mbPerPage;

    const options = {
      maxSizeMB: safeMB, 
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    let tempUrl: string | null = null;
    try {
      const compressedFile = await imageCompression(imageItem.file, options);
      const img = new Image();
      tempUrl = URL.createObjectURL(compressedFile);
      img.src = tempUrl;
      await new Promise((r) => (img.onload = r));

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      if (imageItem.rotation === 90 || imageItem.rotation === 270) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((imageItem.rotation * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      return canvas.toDataURL("image/jpeg", 0.9);
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      if (tempUrl) URL.revokeObjectURL(tempUrl);
    }
  };

  const handlePreview = async (imageItem: { file: File; rotation: number }) => {
    setIsPreviewLoading(true);
    setPreviewImage(null); 
    const resultUrl = await compressSingleImage(imageItem);
    setPreviewImage(resultUrl);
    setIsPreviewLoading(false);
  };

  const generatePDF = async () => {
    if (images.length === 0) return;
    setIsGenerating(true);
    setStatusText("Initializing PDF Engine...");

    const doc = new jsPDF({ unit: "mm", format: "a4" });
    
    for (let i = 0; i < images.length; i++) {
      setStatusText(`Processing page ${i + 1} of ${images.length}...`);
      
      const imgData = await compressSingleImage(images[i]);
      if (!imgData) continue;

      const tempImg = new Image();
      tempImg.src = imgData;
      await new Promise((r) => (tempImg.onload = r));

      const imgWidth = tempImg.width;
      const imgHeight = tempImg.height;
      const isLandscape = imgWidth > imgHeight;
      const orientation = isLandscape ? "l" : "p";

      if (i > 0) doc.addPage("a4", orientation);
      else doc.setPage(1);
      
      if (i === 0 && isLandscape) {
         doc.deletePage(1);
         doc.addPage("a4", "l");
      }

      const pageWidth = isLandscape ? 297 : 210;
      const pageHeight = isLandscape ? 210 : 297;
      const margin = 10;
      const maxWidth = pageWidth - (margin * 2);
      const maxHeight = pageHeight - (margin * 2);
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      const x = (pageWidth - finalWidth) / 2;
      const y = (pageHeight - finalHeight) / 2;

      doc.addImage(imgData, "JPEG", x, y, finalWidth, finalHeight);
    }

    setStatusText("Finalizing PDF...");
    doc.save(`document-${targetSize}${unit}.pdf`);
    setIsGenerating(false);
    setStatusText("");
  };

  return (
    <div className="space-y-8">
      
      {/* --- AD REMOVED: Ad is handled in page.tsx --- */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* --- HEADER & CONTROLS --- */}
        <div className="bg-slate-900 p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                  <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <FileText className="text-red-400" /> Pro PDF Maker
                  </h1>
                  <p className="mt-2 text-slate-400 text-sm">Convert photos to PDF with total size control.</p>
              </div>

              {/* CONTROL PANEL */}
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full md:w-auto min-w-[340px]">
                  <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-slate-300">
                          <Settings size={18} />
                          <span className="font-bold text-xs uppercase tracking-wider">Total PDF Size</span>
                      </div>
                      
                      {/* INPUT + UNIT TOGGLE */}
                      <div className="flex items-center gap-2">
                          <input 
                              type="number" min="0.1" step="0.1"
                              value={targetSize} 
                              onChange={(e) => setTargetSize(e.target.value)}
                              className="w-20 px-2 py-1 rounded bg-white text-slate-900 font-bold outline-none text-right font-mono"
                          />
                          <div className="flex bg-slate-700 rounded p-1">
                              <button 
                                  onClick={() => setUnit("KB")}
                                  className={`px-2 py-0.5 text-xs font-bold rounded transition ${unit === "KB" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"}`}
                              >
                                  KB
                              </button>
                              <button 
                                  onClick={() => setUnit("MB")}
                                  className={`px-2 py-0.5 text-xs font-bold rounded transition ${unit === "MB" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"}`}
                              >
                                  MB
                              </button>
                          </div>
                      </div>
                  </div>

                  {/* PRESET BUTTONS */}
                  <div className="grid grid-cols-4 gap-2">
                      {presets.map((preset, index) => (
                          <button
                              key={index}
                              onClick={() => handlePresetClick(preset.value, preset.unit)}
                              className={`text-[10px] font-bold py-2 px-1 rounded transition border ${
                                  Number(targetSize) === preset.value && unit === preset.unit
                                  ? "bg-red-600 text-white border-red-500" 
                                  : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                              }`}
                          >
                              {preset.label.split(" (")[0]}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
        </div>

        {/* --- MAIN AREA --- */}
        <div className="p-6 md:p-8">
          
          {/* INFO BAR */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
               <div className={`p-3 rounded-lg text-sm font-bold text-center border ${getQualityLabel().color.replace('text-', 'border-').replace('600', '200')} bg-slate-50`}>
                  <span className={getQualityLabel().color}>{getQualityLabel().text}</span>
              </div>
              <div className="p-3 rounded-lg text-sm font-bold text-center border border-slate-200 bg-slate-50 text-slate-600">
                  Limit per page: <span className="text-slate-900">{mbPerPage > 1 ? mbPerPage.toFixed(1) + " MB" : (mbPerPage * 1024).toFixed(0) + " KB"}</span> (Approx)
              </div>
          </div>

          {/* --- IMAGE GRID --- */}
          {images.length === 0 ? (
             <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 md:p-20 text-center hover:bg-slate-50 hover:border-red-400 transition cursor-pointer relative group">
                <input
                  type="file" multiple accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={handleImageUpload}
                />
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <Upload className="h-10 w-10 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-slate-800">Drop images here</p>
                <p className="text-slate-500 mt-2">JPG, PNG, WEBP - We'll merge them into one PDF</p>
             </div>
          ) : (
            <>
               <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-700 text-lg flex items-center gap-2">
                      <FileDigit /> {images.length} Pages
                   </h3>
                   <label className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200 transition font-bold text-sm">
                      <Plus size={16} /> Add More
                      <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload}/>
                   </label>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                 {images.map((img, idx) => (
                   <div key={img.id} className="relative group bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition">
                     
                     {/* PREVIEW IMAGE */}
                     <div className="h-40 flex items-center justify-center p-2 bg-slate-200/50">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img
                           src={imageUrlMap.get(img.id) ?? ""}
                           alt="preview"
                           style={{ transform: `rotate(${img.rotation}deg)` }}
                           className="max-h-full max-w-full object-contain transition-transform duration-300"
                         />
                     </div>

                     {/* HOVER ACTIONS */}
                     <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 backdrop-blur-[2px]">
                         <button 
                             onClick={() => handlePreview(img)}
                             className="bg-white text-slate-900 p-2 rounded-full hover:scale-110 transition shadow-lg"
                             title="Preview Quality"
                         >
                             <Eye size={20} />
                         </button>
                     </div>

                     {/* FOOTER ACTIONS */}
                     <div className="bg-white p-2 flex justify-between items-center border-t relative z-10">
                         <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Pg {idx + 1}</span>
                         <div className="flex gap-1">
                           <button onClick={() => rotateImage(img.id)} className="p-1.5 text-slate-500 hover:bg-blue-50 hover:text-blue-600 rounded-md transition" title="Rotate">
                             <RotateCw size={16} />
                           </button>
                           <button onClick={() => removeImage(img.id)} className="p-1.5 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-md transition" title="Delete">
                             <Trash2 size={16} />
                           </button>
                         </div>
                     </div>
                   </div>
                 ))}
               </div>

               {/* GENERATE SECTION */}
               <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="text-slate-600 text-sm max-w-md">
                      <strong>Ready to Create PDF?</strong><br/>
                      We will optimize all {images.length} pages to ensure the final file is under <span className="text-red-600 font-bold">{targetSize} {unit}</span>.
                   </div>
                   
                   <button
                      onClick={generatePDF}
                      disabled={isGenerating}
                      className={`
                        px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center gap-3
                        ${isGenerating ? "bg-slate-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 hover:scale-105 transition"}
                      `}
                   >
                      {isGenerating ? (
                        <span className="flex items-center gap-2">Processing...</span>
                      ) : (
                        <>
                          <Download /> Download PDF
                        </>
                      )}
                   </button>
               </div>

               {/* LOADING BAR */}
               {statusText && (
                  <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-slate-700 font-bold mb-2 flex items-center justify-center gap-2">
                          {isGenerating && <span className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>}
                          {statusText}
                      </p>
                      <div className="w-full max-w-md mx-auto bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-red-600 h-full rounded-full w-2/3 animate-[progress_1s_ease-in-out_infinite]"></div>
                      </div>
                  </div>
               )}
            </>
          )}
        </div>

        {/* --- PREVIEW MODAL --- */}
        {(previewImage || isPreviewLoading) && (
          <div className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl">
              <button 
                  onClick={() => { setPreviewImage(null); setIsPreviewLoading(false); }}
                  className="absolute top-4 right-4 bg-slate-100 hover:bg-red-500 hover:text-white p-2 rounded-full transition z-10"
              >
                  <X size={24} />
              </button>
              <h3 className="text-xl font-bold mb-1 text-slate-800">Quality Preview</h3>
              <p className="text-sm text-slate-500 mb-4">
                  This is how a single page will look at approx <strong>{mbPerPage > 1 ? mbPerPage.toFixed(1) + " MB" : (mbPerPage * 1024).toFixed(0) + " KB"}</strong>.
              </p>
              
              <div className="flex-1 overflow-auto bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 p-4">
                  {isPreviewLoading ? (
                      <div className="flex flex-col items-center gap-3 text-red-600">
                          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                          <span className="font-bold text-sm uppercase tracking-wider">Optimizing...</span>
                      </div>
                  ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={previewImage!} alt="Preview" className="max-w-full object-contain shadow-lg" />
                  )}
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  );
}
