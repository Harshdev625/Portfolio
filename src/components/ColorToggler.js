import React from 'react';
import './ColorToggler.css';

const ColorToggler = ({ onColorChange }) => {
  const colorToggle = (color) => {
    document.body.style.backgroundColor = color;
    onColorChange(color);
  };

  return (
    <div className="shifting">
      <button className="btn1 button-style" onClick={() => colorToggle('#2A93EC')}></button>
      <button className="btn2 button-style" onClick={() => colorToggle('#7952B3')}></button>
      <button className="btn3 button-style" onClick={() => colorToggle('#16161A')}></button>
      <button className="btn4 button-style" onClick={() => colorToggle('#004642')}></button>
    </div>
  );
};

export default ColorToggler;
