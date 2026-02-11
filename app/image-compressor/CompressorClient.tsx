"use client";

import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { Upload, Download, RefreshCw, Image as ImageIcon, Settings, Eye, X, CheckCircle } from "lucide-react";

export default function CompressorClient() {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  
  // New State for Unit Selection
  const [targetSize, setTargetSize] = useState<number | string>(50); // Default 50
  const [unit, setUnit] = useState<"KB" | "MB">("KB"); // Default Unit
  const [showPreview, setShowPreview] = useState(false);

  // --- HELPER: PRESETS ---
  const presets = [
    { label: "20 KB (Sign)", value: 20, unit: "KB" },
    { label: "50 KB (Photo)", value: 50, unit: "KB" },
    { label: "100 KB (Doc)", value: 100, unit: "KB" },
    { label: "2 MB (High)", value: 2, unit: "MB" },
  ];

  // --- HELPER: QUALITY LABEL ---
  const getQualityLabel = () => {
    if (!originalImage) return { text: "Upload an image to start", color: "text-gray-400" };
    
    // Normalize to MB for calculation
    const sizeInMB = unit === "KB" ? Number(targetSize) / 1024 : Number(targetSize);

    if (sizeInMB >= 0.5) return { text: "Quality: Excellent (High Res) 🌟", color: "text-green-600" };
    if (sizeInMB >= 0.1) return { text: "Quality: Good (Web Friendly) ✅", color: "text-blue-600" };
    if (sizeInMB >= 0.01) return { text: "Quality: Low (Govt Form Standard) ⚠️", color: "text-orange-600" };
    return { text: "Quality: Very Low (Pixelated) ❌", color: "text-red-600" };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setOriginalImage(imageFile);
      setCompressedImage(null);
      triggerCompression(imageFile);
    }
  };

  // Wrapper to handle unit conversion before compressing
  const triggerCompression = (file: File) => {
    let sizeInMB = Number(targetSize);
    if (unit === "KB") {
      sizeInMB = sizeInMB / 1024; // Convert KB to MB
    }
    compressImage(file, sizeInMB);
  };

  const compressImage = async (file: File, targetMB: number) => {
    setIsCompressing(true);
    
    // Safety check: Prevent freezing if user types "50000 MB"
    if(targetMB > 20) targetMB = 20; 

    const options = {
      maxSizeMB: targetMB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 1.0, 
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedImage(compressedFile);
    } catch {
      alert("Error compressing image. Try a different file.");
    }
    setIsCompressing(false);
  };

  // Auto-compress when settings change
  useEffect(() => {
    if (originalImage) {
      const timer = setTimeout(() => {
        triggerCompression(originalImage);
      }, 600);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetSize, unit]); 

  const handlePresetClick = (presetVal: number, presetUnit: string) => {
    setTargetSize(presetVal);
    setUnit(presetUnit as "KB" | "MB");
  };

  return (
    <div className="space-y-8">

      {/* --- AD REMOVED: Ad logic is handled in page.tsx now --- */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* --- HEADER & CONTROLS --- */}
        <div className="bg-slate-900 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                        <ImageIcon className="text-blue-400" /> Pro Image Compressor
                    </h1>
                    <p className="mt-2 text-slate-400 text-sm">Reduce image size to exact KB or MB limits.</p>
                </div>

                {/* CONTROL PANEL */}
                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full md:w-auto min-w-[340px]">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-slate-300">
                            <Settings size={18} />
                            <span className="font-bold text-xs uppercase tracking-wider">Target Size</span>
                        </div>
                        
                        {/* INPUT + UNIT TOGGLE */}
                        <div className="flex items-center gap-2">
                            <input 
                                type="number" min="1" step="1"
                                value={targetSize} 
                                onChange={(e) => setTargetSize(e.target.value)}
                                className="w-20 px-2 py-1 rounded bg-white text-slate-900 font-bold outline-none text-right font-mono"
                            />
                            <div className="flex bg-slate-700 rounded p-1">
                                <button 
                                    onClick={() => setUnit("KB")}
                                    className={`px-2 py-0.5 text-xs font-bold rounded transition ${unit === "KB" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                                >
                                    KB
                                </button>
                                <button 
                                    onClick={() => setUnit("MB")}
                                    className={`px-2 py-0.5 text-xs font-bold rounded transition ${unit === "MB" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
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
                                    ? "bg-blue-600 text-white border-blue-500" 
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
        <div className="p-6 md:p-10">
            
            {/* QUALITY ALERT */}
            <div className={`mb-8 p-3 rounded-lg text-sm font-bold text-center border ${getQualityLabel().color.replace('text-', 'border-').replace('600', '200')} bg-slate-50`}>
                <span className={getQualityLabel().color}>{getQualityLabel().text}</span>
            </div>

            {/* UPLOAD AREA (If Empty) */}
            {!originalImage && (
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 md:p-20 text-center hover:bg-slate-50 hover:border-blue-400 transition cursor-pointer relative group">
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={handleImageUpload}
                    />
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <Upload className="h-10 w-10 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-slate-800">Click to Upload Image</p>
                    <p className="text-slate-500 mt-2">Supports JPG, PNG, WEBP</p>
                </div>
            )}

            {/* COMPARISON VIEW (If Loaded) */}
            {originalImage && (
                <div className="grid md:grid-cols-2 gap-8 items-start animate-in fade-in zoom-in duration-300">
                    
                    {/* ORIGINAL */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold text-slate-500 text-sm uppercase">Original</span>
                            <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-bold font-mono">
                                {(originalImage.size / 1024).toFixed(1)} KB
                            </span>
                        </div>
                        <div className="h-64 flex items-center justify-center bg-slate-200/50 rounded-xl overflow-hidden border border-slate-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={URL.createObjectURL(originalImage)}
                                alt="Original"
                                className="max-h-full max-w-full object-contain opacity-70 grayscale"
                            />
                        </div>
                        <button 
                            onClick={() => { setOriginalImage(null); setCompressedImage(null); }}
                            className="mt-4 w-full py-3 text-slate-500 hover:text-red-600 text-sm font-bold hover:bg-red-50 rounded-lg transition"
                        >
                            Change Image
                        </button>
                    </div>

                    {/* COMPRESSED RESULT */}
                    <div className="bg-blue-50/50 p-5 rounded-2xl border-2 border-blue-100 relative shadow-sm">
                        <div className="flex justify-between mb-4 items-center">
                            <span className="font-bold text-blue-700 flex items-center gap-2 text-sm uppercase">
                                <CheckCircle size={16} /> Optimized Result
                            </span>
                            {compressedImage && (
                                <div className="flex gap-2">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold font-mono border border-green-200">
                                        {(compressedImage.size / 1024).toFixed(1)} KB
                                    </span>
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold font-mono">
                                        -{((1 - compressedImage.size / originalImage.size) * 100).toFixed(0)}%
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="h-64 flex items-center justify-center bg-white rounded-xl overflow-hidden relative group border border-slate-200">
                            {isCompressing ? (
                                <div className="flex flex-col items-center gap-3 text-blue-600">
                                    <RefreshCw className="animate-spin h-8 w-8" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Compressing...</span>
                                </div>
                            ) : compressedImage ? (
                                <>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={URL.createObjectURL(compressedImage)}
                                        alt="Compressed"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                    {/* PREVIEW BUTTON OVERLAY */}
                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
                                        <button 
                                            onClick={() => setShowPreview(true)}
                                            className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition transform"
                                        >
                                            <Eye size={18} /> View Full Size
                                        </button>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        {/* DOWNLOAD BUTTON */}
                        {compressedImage && !isCompressing && (
                            <a
                                href={URL.createObjectURL(compressedImage)}
                                download={`compressed-${originalImage.name}`}
                                className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 transform active:scale-95"
                            >
                                <Download size={20} /> Download Image
                            </a>
                        )}
                    </div>

                </div>
            )}
        </div>

        {/* --- FULL SCREEN PREVIEW MODAL --- */}
        {showPreview && compressedImage && (
            <div className="fixed inset-0 z-[100] bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl p-4 max-w-5xl w-full max-h-[90vh] flex flex-col relative shadow-2xl">
                    <button 
                        onClick={() => setShowPreview(false)}
                        className="absolute top-4 right-4 bg-slate-100 hover:bg-red-500 hover:text-white p-2 rounded-full transition z-10"
                    >
                        <X size={24} />
                    </button>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 flex items-center gap-2">
                        <Eye size={20} className="text-blue-600"/> Final Quality Check
                    </h3>
                    <div className="flex-1 overflow-auto bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 p-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={URL.createObjectURL(compressedImage)} 
                            alt="Preview" 
                            className="max-w-full object-contain shadow-sm" 
                        />
                    </div>
                    <div className="mt-4 flex justify-end gap-3">
                         <button 
                            onClick={() => setShowPreview(false)}
                            className="px-6 py-2 rounded-lg font-bold text-slate-500 hover:bg-slate-100 transition"
                         >
                            Close
                        </button>
                        <a
                            href={URL.createObjectURL(compressedImage)}
                            download={`compressed-${originalImage?.name}`}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
                        >
                            <Download size={18} /> Download Now
                        </a>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
