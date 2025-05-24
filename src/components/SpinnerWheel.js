import React, { useState } from "react";
import "./SpinnerWheel.css";

const SpinnerWheel = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { name: "Item 1", color: '#eb4034' },
    { name: "Item 2", color: '#34dceb' },
    { name: "Item 3", color: '#dc34eb' },
    { name: "Item 4", color: '#34eb59' },
    { name: "Item 6", color: '#ebab34' },
    { name: "Item 6", color: '#34dceb' },
    { name: "Item 7", color: '#dc34eb' },
    { name: "Item 8", color: '#34eb59' },
  ]

  const spinWheel = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  return (
    <div className="spinner-container">
      <div className="wheel">
      <button onClick={spinWheel}>Spin</button>
        {items.map((item, index) => (
          <div
            key={index}
            className="wheel-segment"
            style={{backgroundColor: item.color}}
            // style={{
            //   transform: `rotate(${(360 / items.length) * index}deg)`,
            // }}
          >
            {item.name}
          </div>
        ))}
      </div>
      {selectedItem && <p>You won: {selectedItem}</p>}
    </div>
  );
};

export default SpinnerWheel;