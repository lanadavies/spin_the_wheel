import React, { useEffect, useState } from "react";
import "./SpinnerWheel.css";
import Confetti from "react-confetti-boom";

const colorPalette = ["#f7abcf", "#f7d1ab", "#c2afdc", "#6988db"];

const SpinnerWheel = () => {
  const ROTATION_SPEED = 4; // seconds for the wheel to spin
  const [selectedItem, setSelectedItem] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [items, setItems] = useState([
    { name: "Item 1", color: colorPalette[0] },
    { name: "Item 2", color: colorPalette[1] },
    { name: "Item 3", color: colorPalette[2] },
    { name: "Item 4", color: colorPalette[3] },
    { name: "Item 5", color: colorPalette[0] },
    { name: "Item 6", color: colorPalette[1] },
    { name: "Item 7", color: colorPalette[2] },
    { name: "Item 8", color: colorPalette[3] },
  ]);
  const [rotation, setRotation] = useState(getStartRotation());

  function getStartRotation() {
    const degreesPerItem = 360 / items.length;
    return 45 + degreesPerItem / 2;
  }

  useEffect(() => {
    setRotation(getStartRotation()); // Start at the first item
  }, [items]);

  useEffect(() => {
    if (!confetti) return;
    setTimeout(() => {
      setConfetti(false); // Show confetti for 3 seconds
    }, 5000);
  }, [confetti]);

  const spinWheel = () => {
    const num = rotation - Math.floor(Math.random() * 360) - 720;
    setRotation(num); // Ensure at least two full rotations
    const degreesPerItem = 360 / items.length;
    // console.log(
    //   Math.floor((rotation - getStartRotation()) / degreesPerItem) %
    //     items.length
    // );
    setTimeout(() => {
      //   const degreesPerItem = 360 / items.length;
      //   setSelectedItem(
      //     Math.floor((Math.abs(rotation) - getStartRotation()) / degreesPerItem) %
      //       items.length
      //   );
      setConfetti(true);
    }, ROTATION_SPEED * 1000);
  };

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  // Function to calculate the angle for the polygon clipPath
  function getPolygonAngle() {
    return (1 - Math.tan(toRadians(45 - 180 / items.length))) * 100;
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
            transition: `transform ${ROTATION_SPEED}s ease-out`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="wheel-segment"
              style={{
                backgroundColor: item.color,
                transform: `rotate(${(360 / items.length) * index}deg)`,
                clipPath: `polygon(0 0, ${getPolygonAngle()}% 0, 100% 100%, 0 ${getPolygonAngle()}%)`, //`polygon(0 0, 100% 0, 100% 100%, 0 100%)`
              }}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && <p>You won: {items[selectedItem].name}</p>}
    </>
  );
};

export default SpinnerWheel;
