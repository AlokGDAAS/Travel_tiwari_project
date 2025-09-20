import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const PriceSlider = ({start ,end , max,head,symbol}) => {
  const sliderRef = useRef(null);
  const [range, setRange] = useState([1000, 5000]);

  useEffect(() => {
    if (!sliderRef.current) return;

    // Avoid re-initializing if slider already exists
    if (sliderRef.current.noUiSlider) {
      return;
    }

    noUiSlider.create(sliderRef.current, {
      start: [start, end],
      connect: true,
      range: {
        min: 0,
        max: max,
      },
    });

    // Update state when slider values change
    sliderRef.current.noUiSlider.on("update", (values) => {
      setRange(values.map((val) => Math.round(val)));
    });

    // Cleanup on unmount (prevents "already initialized" error)
    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className="sidebar-widget">
      <h4 className="widget-title mb-3">{head}</h4>
      <div ref={sliderRef}></div>
      <div className="mt-2 d-flex justify-content-between">
        <div className="badge bg-primary me-2">{symbol}{range[0]}</div>
        <div className="badge bg-success">{symbol}{range[1]}</div>
      </div>
    </div>
  );
};

export default PriceSlider;