"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import imageCompression from "browser-image-compression";
import { Upload, FileText, Trash2, Download, Plus, RotateCw, HardDrive, Eye, X } from "lucide-react";

export default function PdfClient() {
  const [images, setImages] = useState<{ file: File; rotation: number; id: string }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [targetSize, setTargetSize] = useState<number | string>(2); 
  const [statusText, setStatusText] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);

  const safeTarget = Number(targetSize) || 2;
  const mbPerPage = images.length > 0 ? (safeTarget * 0.9) / images.length : 0;
  
  const getQualityLabel = () => {
    if (images.length === 0) return { text: "Add images to see quality", color: "text-gray-400" };
    if (mbPerPage > 0.8) return { text: "Quality: Excellent (High Res) 🌟", color: "text-green-600" };
    if (mbPerPage > 0.3) return { text: "Quality: Good (Readable) ✅", color: "text-blue-600" };
    if (mbPerPage > 0.1) return { text: "Quality: Low (Email Friendly) ⚠️", color: "text-yellow-600" };
    return { text: "Quality: Very Pixelated (Not Recommended) ❌", color: "text-red-600" };
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

  const compressSingleImage = async (imageItem: { file: File; rotation: number }) => {
    const options = {
      maxSizeMB: mbPerPage, 
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageItem.file, options);
      const img = new Image();
      img.src = URL.createObjectURL(compressedFile);
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
    setStatusText("Initializing...");

    const doc = new jsPDF({ unit: "mm", format: "a4" });
    
    for (let i = 0; i < images.length; i++) {
      setStatusText(`Compressing page ${i + 1} of ${images.length}...`);
      
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

    setStatusText("Downloading...");
    doc.save(`document-${safeTarget}MB.pdf`);
    setIsGenerating(false);
    setStatusText("");
  };

  return (
    <>
      {previewImage || isPreviewLoading ? (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-4 max-w-4xl w-full max-h-[90vh] flex flex-col relative">
            <button 
                onClick={() => { setPreviewImage(null); setIsPreviewLoading(false); }}
                className="absolute top-4 right-4 bg-gray-200 hover:bg-red-500 hover:text-white p-2 rounded-full transition z-10"
            >
                <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Preview</h3>
            <p className="text-sm text-gray-500 mb-4">
               This is how your page will look at <strong>{mbPerPage.toFixed(2)} MB</strong> size.
            </p>
            <div className="flex-1 overflow-auto bg-gray-100 rounded-lg flex items-center justify-center border">
                {isPreviewLoading ? (
                    <div className="flex flex-col items-center gap-2 text-blue-600">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <span>Generating Preview...</span>
                    </div>
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={previewImage!} alt="Preview" className="max-w-full object-contain shadow-lg" />
                )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-red-600 p-6 text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileText /> Pro PDF Maker
            </h1>
            <p className="mt-2 opacity-90 text-sm">Convert & Compress images to PDF.</p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-xl flex flex-col gap-2 border border-white/20 min-w-[300px]">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <HardDrive size={20} />
                    <span className="font-bold text-sm uppercase">Target Size</span>
                </div>
                <div className="flex items-center gap-1 bg-white text-red-600 px-2 py-1 rounded font-bold">
                    <input 
                      type="number" min="0.1" max="50" step="0.1"
                      value={targetSize} 
                      onChange={(e) => setTargetSize(e.target.value)}
                      className="w-12 outline-none text-right"
                    />
                    <span className="text-sm">MB</span>
                </div>
             </div>
             <div className="text-xs bg-black/20 p-2 rounded text-center">
                Approx <strong>{mbPerPage.toFixed(2)} MB</strong> per page
             </div>
          </div>
        </div>

        <div className="p-8">
            <div className={`mb-6 p-3 rounded-lg text-sm font-bold text-center border ${getQualityLabel().color.replace('text-', 'border-').replace('600', '200')} bg-gray-50`}>
                <span className={getQualityLabel().color}>{getQualityLabel().text}</span>
            </div>

          {images.length === 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:bg-red-50 transition cursor-pointer relative group">
              <input
                type="file" multiple accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={handleImageUpload}
              />
              <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4 group-hover:text-red-500 transition" />
              <p className="text-2xl font-bold text-gray-700">Drop images here</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-gray-700 text-lg">
                    {images.length} Pages Selected
                 </h3>
                 <label className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition font-medium">
                    <Plus size={18} /> Add More
                    <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload}/>
                 </label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {images.map((img, idx) => (
                  <div key={img.id} className="relative group bg-gray-100 rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">
                    <div className="h-48 flex items-center justify-center p-2 bg-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={URL.createObjectURL(img.file)}
                          alt="preview"
                          style={{ transform: `rotate(${img.rotation}deg)` }}
                          className="max-h-full max-w-full object-contain transition-transform duration-300"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                        <button 
                            onClick={() => handlePreview(img)}
                            className="bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition shadow-lg flex flex-col items-center justify-center w-16 h-16"
                            title="Preview Quality"
                        >
                            <Eye size={24} />
                            <span className="text-[10px] font-bold mt-1">PREVIEW</span>
                        </button>
                    </div>
                    <div className="bg-white p-3 flex justify-between items-center border-t relative z-10">
                       <span className="text-xs font-bold text-gray-500">Pg {idx + 1}</span>
                       <div className="flex gap-2">
                          <button onClick={() => rotateImage(img.id)} className="p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-full transition">
                            <RotateCw size={18} />
                          </button>
                          <button onClick={() => removeImage(img.id)} className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-full transition">
                            <Trash2 size={18} />
                          </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="text-gray-600 text-sm max-w-md">
                    <strong>Ready to Convert?</strong><br/>
                    We will auto-compress images to keep file size near <span className="text-red-600 font-bold">{targetSize} MB</span>.
                 </div>
                 
                 <button
                    onClick={generatePDF}
                    disabled={isGenerating}
                    className={`
                      px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center gap-3
                      ${isGenerating ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 hover:scale-105 transition"}
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

              {statusText && (
                <div className="mt-6 text-center">
                    <p className="text-blue-600 font-medium animate-pulse mb-2">{statusText}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full w-2/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
                    </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}