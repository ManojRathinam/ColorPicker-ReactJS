import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color; // Update the background color of the page
  };

  return (
    <div className="app">
      <ColorPicker colors={[
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#800080', // Purple
        '#FFA500', // Orange
        '#008000', // Dark Green
        '#FFC0CB', // Pink
        ]} onColorChange={handleColorChange} />
    </div>
  );
};

export default App;
