import React, { useState } from "react";
import "./SpinnerWheel.css";

const SpinnerWheel = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { name: "Item 1", color: "#eb4034" },
    { name: "Item 2", color: "#34dceb" },
    { name: "Item 3", color: "#dc34eb" },
    { name: "Item 4", color: "#34eb59" },
    { name: "Item 5", color: "#ebab34" },
    { name: "Item 6", color: "#34dceb" },
    { name: "Item 7", color: "#dc34eb" },
    { name: "Item 8", color: "#34eb59" },
  ];

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  function toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  // Function to calculate the angle for the polygon clipPath
  function getPolygonAngle() {
    return (1 - Math.tan(toRadians(45 - 180 / items.length))) * 100;
  }

  return (
    <div className="spinner-container">
      <div className="wheel">
        <button onClick={spinWheel}>Spin</button>
        {items.map((item, index) => (
          <div
            key={index}
            className="wheel-segment"
            style={{
              backgroundColor: item.color,
              transform: `rotate(${(360 / items.length) * index}deg)`,
              // clipPath: `polygon(64% 43%, 43% 60%, 100% 100%)`//`polygon(0 0, 100% 0, 100% 100%, 0 100%)`
              clipPath: `polygon(0 0, ${getPolygonAngle()}% 0, 100% 100%, 0 ${getPolygonAngle()}%)`, //`polygon(0 0, 100% 0, 100% 100%, 0 100%)`
            }}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {selectedItem && <p>You won: {selectedItem.name}</p>}
    </div>
  );
};

export default SpinnerWheel;
