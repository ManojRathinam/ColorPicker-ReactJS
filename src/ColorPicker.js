import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, onColorChange }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
    onColorChange(color); // Call the onColorChange callback with the selected color
  };

  return (
    <div className="color-picker">
      <button className="picker-button" onClick={handleButtonClick}>
        Pick a color
      </button>
      {showColors && (
        <ul className="color-list">
          {colors.map((color) => (
            <li
              key={color}
              className={`color-item ${color === selectedColor ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;
