"use client"
import QRCode from "qrcode.react";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState('');
  const [generatedQRCode, setGeneratedQRCode] = useState('');

  const generateQRCode = () => {
    if (url.trim() === '') {
      alert('Please enter a valid URL');
      return;
    }

    setGeneratedQRCode(url);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">QR Code Generator</h1>
      <label className="block mb-2">
        Enter URL:
        <input
          className="border rounded border-gray-300 p-2 w-full"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={generateQRCode}>
        Generate QR Code
      </button>

      {generatedQRCode && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">QR Code</h2>
          <div className="bg-white p-4 border border-gray-300">
            <QRCode id="qrcode" value={generatedQRCode} />
          </div>
          <a
            className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            href={`data:image/png;base64,${''}`}
            download="qrcode.png"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>

    </main>
  );
}
