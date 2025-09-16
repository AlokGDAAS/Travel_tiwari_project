import { useState } from "react";

export default function I_frame({ image, videoUrl, alt }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video">
      {/* Preview Image */}
      {/* <img
        src={image}
        alt={alt || "Video Preview"}
        className="w-full h-full object-cover rounded-xl"
      /> */}

      {/* Play Button Centered */}
      <button
        onClick={() => setShowVideo(true)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-black/60 p-[1.5vw] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-[3vw] h-[3vw]"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>

      {/* Overlay Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`${videoUrl}?autoplay=1`}
              title="Embedded Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-[2.5vw] right-0 text-white text-[1.5vw] font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

