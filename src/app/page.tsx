"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import type { AnimationItem, LottiePlayer } from "lottie-web";

interface AnimationData {
  w?: number;
  h?: number;
  [key: string]: unknown;
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-96 bg-gray-800 rounded-lg">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  );
}

function AnimationContainer({
  lottie,
  animationData,
  containerRef,
  setAnimationSize,
}: {
  lottie: LottiePlayer | null;
  animationData: AnimationData | null;
  containerRef: React.RefObject<HTMLDivElement>;
  setAnimationSize: (size: { width: number; height: number }) => void;
}) {
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (lottie && animationData && containerRef.current) {
      if (animationRef.current) {
        animationRef.current.destroy();
      }

      containerRef.current.innerHTML = "";
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });

      if (animationData.w && animationData.h) {
        setAnimationSize({ width: animationData.w, height: animationData.h });
      }

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, [lottie, animationData, containerRef, setAnimationSize]);

  return null;
}

export default function Home() {
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  const [animationData, setAnimationData] = useState<AnimationData | null>(
    null
  );
  const [animationSize, setAnimationSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const [fileName, setFileName] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadLottie = async () => {
      try {
        const lottieModule = await import("lottie-web");
        setLottie(lottieModule.default);
      } catch (error) {
        console.error("Failed to load lottie-web:", error);
      }
    };

    loadLottie();

    const updateViewportSize = () => {};

    updateViewportSize();
    window.addEventListener("resize", updateViewportSize);

    return () => {
      window.removeEventListener("resize", updateViewportSize);
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result as string;
          if (result) {
            const parsedData = JSON.parse(result) as AnimationData;
            setAnimationData(parsedData);
            setFileName(file.name);
          }
        } catch (error) {
          console.error("Invalid JSON file", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result as string;
          if (result) {
            const parsedData = JSON.parse(result) as AnimationData;
            setAnimationData(parsedData);
            setFileName(file.name);
          }
        } catch (error) {
          console.error("Invalid JSON file", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900">
      <section className="flex flex-col items-center justify-center min-h-screen p-6 w-full">
        <h1 className="text-[40px] md:text-[48px] lg:text-[72px] font-extrabold text-white mb-2 text-center">
          JSON Animation Viewer
        </h1>
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-300 mb-2 text-center">
          Easily preview your JSON animations by dragging them here!
        </h2>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-400 mb-6 text-center">
          Your JSON will not be stored on this site. You can rest assured as this
          site has no database.
        </p>
      <label className="mb-4 w-fit text-center">
          {fileName && (
            <span className="mt-2 mr-2 text-gray-200">{fileName}</span>
          )}
          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            className="relative bg-opacity-30 bg-gray-800 text-white px-[48px] py-3 rounded-lg shadow-md hover:bg-opacity-50 transition-all w-full md:w-auto backdrop-blur-md border border-gray-700 overflow-hidden cursor-pointer hover:bg-gray-900"
            onClick={handleButtonClick}
            aria-label="Select JSON file"
          >
            Select File
            <span className="absolute inset-0 w-full h-full border-2 border-transparent rounded-lg animate-pulse"></span>
          </button>
        </label>
        <div
          ref={containerRef}
          className="border border-gray-700 w-full max-w-md h-96 flex items-center justify-center mb-8 bg-gray-800 rounded-lg shadow-lg"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          aria-label="Drop zone for JSON animation files"
          role="region"
        >
          {!animationData && (
            <p className="text-gray-400">Drag and drop your JSON here!</p>
          )}
        </div>
        {lottie && animationData && (
          <Suspense fallback={<LoadingFallback />}>
            <AnimationContainer
              lottie={lottie}
              animationData={animationData}
              containerRef={containerRef as React.RefObject<HTMLDivElement>}
              setAnimationSize={setAnimationSize}
            />
          </Suspense>
        )}
        <div className="mt-4">
          <p className="animation-size text-gray-300">
            Animation Size(include viewport): {animationSize.width} x{" "}
            {animationSize.height}
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Select or Drop</h3>
            <p className="text-gray-400">
              Click the &quot;Select File&quot; button or drag and drop your Lottie JSON file onto the viewer area. We support all standard Lottie JSON formats.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Preview</h3>
            <p className="text-gray-400">
              Your animation renders immediately in the browser. No server processing, no waiting — everything happens locally on your device.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Check Dimensions</h3>
            <p className="text-gray-400">
              View the original animation dimensions (width × height) to help plan your implementation and ensure pixel-perfect integration.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose JSON Animation Viewer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">🔒 Complete Privacy</h3>
            <p className="text-gray-400 leading-relaxed">
              Unlike other tools that upload your files to their servers, JSON Animation Viewer processes everything locally in your browser. Your animation data never leaves your device — we have no servers and no databases.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">⚡ Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">
              Powered by lottie-web, the official rendering library by Airbnb, your animations play instantly with smooth performance. No loading spinners, no processing delays.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">📱 Works Everywhere</h3>
            <p className="text-gray-400 leading-relaxed">
              Whether you are on a desktop, tablet, or mobile phone, JSON Animation Viewer works seamlessly across all devices and modern browsers. Preview your animations on the go.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">🎯 Developer Friendly</h3>
            <p className="text-gray-400 leading-relaxed">
              Built for developers and designers who work with Lottie animations daily. Instantly check dimensions, preview animations, and verify your JSON files before integrating them into your projects.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          What Are Lottie Animations?
        </h2>
        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>
            Lottie is an open-source animation file format that renders vector-based animations in real time. Created by Airbnb, Lottie animations are exported as JSON data from tools like Adobe After Effects using the Bodymovin plugin.
          </p>
          <p>
            Unlike GIFs or videos, Lottie animations are incredibly lightweight (often under 10KB), fully scalable without quality loss, and can be controlled programmatically — making them the preferred choice for modern app and web development.
          </p>
          <p>
            Lottie animations are widely used across iOS, Android, React Native, and web platforms. Major companies including Airbnb, Google, Uber, and Disney use Lottie animations to create engaging user interfaces and micro-interactions.
          </p>
        </div>
      </section>
    </div>
  );
}
