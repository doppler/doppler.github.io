import React from "react";
import "./ColorWheel.css";

export const ColorWheel = ({ numberOfRadials, reverse }) => {
  return (
    <div className={`ColorWheel ${reverse ? "reverse" : null}`}>
      {Array.from(Array(numberOfRadials)).map((_, i) => (
        <Radial key={i} rotation={(i * 360) / numberOfRadials} />
      ))}
    </div>
  );
};
export const Radial = ({ rotation }) => (
  <div
    className="Radial"
    style={{
      transform: `rotate(${rotation}deg)`,
      backgroundColor: `hsl(${rotation}, 100%, 50%)`
    }}
  />
);
export const RadialCountSlider = ({ numberOfRadials, handleRangeChange }) => (
  <input
    id="RadialCountSlider"
    type="range"
    value={numberOfRadials}
    min={0}
    max={360}
    onChange={handleRangeChange}
  />
);

export default ColorWheel;
