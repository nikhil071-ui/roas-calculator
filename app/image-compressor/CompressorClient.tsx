"use client"; // This handles the interactive part

import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import { Upload, Download, RefreshCw, Image as ImageIcon, HardDrive, Eye, X, CheckCircle } from "lucide-react";

export default function CompressorClient() {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [targetSize, setTargetSize] = useState<number | string>(0.5);
  const [showPreview, setShowPreview] = useState(false);

  // Helper: Get Quality Label
  const getQualityLabel = () => {
    if (!originalImage) return { text: "Upload an image to start", color: "text-gray-400" };
    const size = Number(targetSize);
    if (size >= 1) return { text: "Quality: Excellent (High Res) 🌟", color: "text-green-600" };
    if (size >= 0.2) return { text: "Quality: Good (Web Friendly) ✅", color: "text-blue-600" };
    if (size >= 0.05) return { text: "Quality: Low (Passport/Form Size) ⚠️", color: "text-yellow-600" };
    return { text: "Quality: Very Pixelated (Not Recommended) ❌", color: "text-red-600" };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setOriginalImage(imageFile);
      setCompressedImage(null); // Reset
      compressImage(imageFile, Number(targetSize));
    }
  };

  const compressImage = async (file: File, targetMB: number) => {
    setIsCompressing(true);
    const options = {
      maxSizeMB: targetMB,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 1.0, 
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedImage(compressedFile);
    } catch (error) {
      console.log(error);
      alert("Error compressing image.");
    }
    setIsCompressing(false);
  };

  useEffect(() => {
    if (originalImage) {
      const timer = setTimeout(() => {
        compressImage(originalImage, Number(targetSize));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [targetSize, originalImage]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <ImageIcon /> Pro Image Compressor
            </h1>
            <p className="mt-2 opacity-90 text-sm">Reduce image size to exact MB/KB limits.</p>
          </div>

          {/* CONTROL PANEL */}
          <div className="bg-white/10 p-4 rounded-xl flex flex-col gap-2 border border-white/20 min-w-[300px]">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <HardDrive size={20} />
                    <span className="font-bold text-sm uppercase">Target Max Size</span>
                </div>
                <div className="flex items-center gap-1 bg-white text-blue-600 px-2 py-1 rounded font-bold">
                    <input 
                      type="number" min="0.01" max="50" step="0.05"
                      value={targetSize} 
                      onChange={(e) => setTargetSize(e.target.value)}
                      className="w-16 outline-none text-right"
                    />
                    <span className="text-sm">MB</span>
                </div>
             </div>
             {/* Quality Text */}
             <div className="text-xs bg-black/20 p-2 rounded text-center">
                Type <strong>0.05</strong> for 50KB (Passport Size)
             </div>
          </div>
        </div>

        <div className="p-8">
            {/* QUALITY ALERT BAR */}
            <div className={`mb-8 p-3 rounded-lg text-sm font-bold text-center border ${getQualityLabel().color.replace('text-', 'border-').replace('600', '200')} bg-gray-50`}>
                <span className={getQualityLabel().color}>{getQualityLabel().text}</span>
            </div>

          {/* Upload Area */}
          {!originalImage && (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:bg-blue-50 transition cursor-pointer relative group">
                <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={handleImageUpload}
                />
                <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4 group-hover:text-blue-500 transition" />
                <p className="text-2xl font-bold text-gray-700">Drop your image here</p>
                <p className="text-gray-500 mt-2">JPG, PNG, WEBP • We'll shrink it to {targetSize} MB</p>
            </div>
          )}

          {/* COMPARISON VIEW */}
          {originalImage && (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* ORIGINAL */}
              <div className="bg-gray-50 p-4 rounded-xl border">
                <div className="flex justify-between mb-4">
                    <span className="font-bold text-gray-500">Original</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-bold">
                        {(originalImage.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                </div>
                <div className="h-64 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={URL.createObjectURL(originalImage)}
                        alt="Original"
                        className="max-h-full max-w-full object-contain opacity-50 grayscale"
                    />
                </div>
                <button 
                    onClick={() => { setOriginalImage(null); setCompressedImage(null); }}
                    className="mt-4 w-full py-2 text-gray-500 hover:text-red-600 text-sm font-medium"
                >
                    Replace Image
                </button>
              </div>

              {/* COMPRESSED RESULT */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 relative">
                <div className="flex justify-between mb-4 items-center">
                    <span className="font-bold text-blue-700 flex items-center gap-2">
                        <CheckCircle size={16} /> Result
                    </span>
                    {compressedImage && (
                        <div className="flex gap-2">
                             <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                                {(compressedImage.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                                -{((1 - compressedImage.size / originalImage.size) * 100).toFixed(0)}%
                            </span>
                        </div>
                    )}
                </div>

                <div className="h-64 flex items-center justify-center bg-white rounded-lg overflow-hidden relative group">
                    {isCompressing ? (
                        <div className="flex flex-col items-center gap-2 text-blue-600 animate-pulse">
                            <RefreshCw className="animate-spin h-8 w-8" />
                            <span className="text-sm font-bold">Compressing...</span>
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
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <button 
                                    onClick={() => setShowPreview(true)}
                                    className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition"
                                >
                                    <Eye size={18} /> Preview Quality
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>

                {/* DOWNLOAD ACTION */}
                {compressedImage && !isCompressing && (
                    <a
                      href={URL.createObjectURL(compressedImage)}
                      download={`compressed-${originalImage.name}`}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
                    >
                      <Download size={20} /> Download Compressed Image
                    </a>
                )}
              </div>

            </div>
          )}
        </div>

        {/* --- PREVIEW MODAL --- */}
        {showPreview && compressedImage && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-4 max-w-4xl w-full max-h-[90vh] flex flex-col relative">
                <button 
                    onClick={() => setShowPreview(false)}
                    className="absolute top-4 right-4 bg-gray-200 hover:bg-red-500 hover:text-white p-2 rounded-full transition z-10"
                >
                    <X size={24} />
                </button>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Result Preview</h3>
                <div className="flex-1 overflow-auto bg-gray-100 rounded-lg flex items-center justify-center border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={URL.createObjectURL(compressedImage)} 
                        alt="Preview" 
                        className="max-w-full object-contain shadow-lg" 
                    />
                </div>
                <div className="mt-4 text-center">
                    <a
                    href={URL.createObjectURL(compressedImage)}
                    download={`compressed-${originalImage?.name}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                    <Download size={18} /> Download This Image
                    </a>
                </div>
            </div>
            </div>
        )}
    </div>
  );
}