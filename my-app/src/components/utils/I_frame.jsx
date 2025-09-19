import { useState } from "react";

export default function I_frame({ videoUrl, alt, onPlay, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
    if (onPlay) onPlay(); // notify parent
  };

  const handleClose = () => {
    setShowVideo(false);
    if (onClose) onClose(); // notify parent
  };

  return (
    <div className="icon">
      <div className="position-relative w-100 mx-auto ratio ratio-16x9">
        {/* Play Button */}
        {!showVideo && (
          <button
            onClick={handlePlay}
            className="play-video-btn video-btn"
          >
            <div className="icon">
              <i className="ti ti-player-play-filled"></i>
            </div>
          </button>
        )}

        {/* Overlay Modal */}
        {showVideo && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center z-3">
            <div className="position-relative w-100" style={{ maxWidth: "1200px" }}>
              <div className="ratio ratio-16x9">
                <iframe
                  className="rounded"
                  src={`${videoUrl}?autoplay=1`}
                  title={alt || "Embedded Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="btn btn-light position-absolute top-0 end-0 m-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

