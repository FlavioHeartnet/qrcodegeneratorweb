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
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>
      <div>
      <h1>QR Code Generator</h1>
      <label>
        Enter URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button onClick={generateQRCode}>Generate QR Code</button>

      {generatedQRCode && (
        <div>
          <h2>QR Code</h2>
          <QRCode value={generatedQRCode} />
          <a
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
