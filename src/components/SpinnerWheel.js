import React, { useContext, useEffect, useState } from "react";
import "./SpinnerWheel.css";
import Confetti from "react-confetti-boom";
import { colorPalette, SegmentsContext } from "../SegmentContext";

const SpinnerWheel = () => {
  const ROTATION_SPEED = 4; // seconds for the wheel to spin
  const [confetti, setConfetti] = useState(false);
  const { segments } = useContext(SegmentsContext);
  const [rotation, setRotation] = useState(getStartRotation());
  const [spinning, setSpinning] = useState(false);

  function getStartRotation() {
    const degreesPerItem = 360 / segments.length;
    return 45 + degreesPerItem / 2;
  }

  useEffect(() => {
    setRotation(getStartRotation()); // Start at the first item
  }, [segments]);

  useEffect(() => {
    if (!confetti) return;
    setTimeout(() => {
      setConfetti(false); // Show confetti for 3 seconds
    }, 5000);
  }, [confetti]);

  const spinWheel = () => {
    setSpinning(true);
    const num = rotation - Math.floor(Math.random() * 360) - 720;
    setRotation(num); // Ensure at least two full rotations
    // const degreesPerItem = 360 / segments.length;

    setTimeout(() => {
      setConfetti(true);
      setSpinning(false);
    }, ROTATION_SPEED * 1000);
  };

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  // Function to calculate the angle for the polygon clipPath
  function getPolygonAngle() {
    return (1 - Math.tan(toRadians(45 - 180 / segments.length))) * 100;
  }

  return (
    <>
      <div className="confetti-container">
      {confetti && <Confetti particleCount={200} spreadDeg={90} y={0.3} colors={colorPalette}/>}
      </div>
      <div className="spinner-container">
        <button onClick={spinWheel}>Spin</button>
        <div
          className="wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? `transform ${ROTATION_SPEED}s ease-out` : "none",
          }}
        >
          {segments.map((item, index) => (
            <div
              key={index}
              className="wheel-segment"
              style={{
                backgroundColor: item.color,
                transform: `rotate(${(360 / segments.length) * index}deg)`,
                clipPath: `polygon(0 0, ${getPolygonAngle()}% 0, 100% 100%, 0 ${getPolygonAngle()}%)`, //`polygon(0 0, 100% 0, 100% 100%, 0 100%)`
              }}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpinnerWheel;
