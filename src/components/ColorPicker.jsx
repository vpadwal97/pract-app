import React, { useState } from "react";
// import '../assets/common/style.css';

const ColorPicker = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue("--primary-color");
  const [color, setColor] = useState(primaryColor); // Initial color
  const [disp, setdisp] = useState(false); // Initial color
  

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    document.documentElement.style.setProperty("--primary-color", newColor);
  };



  
  return <>
  <div style={{
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    backgroundColor : 'var(--primary-color)'
  }} 
  // onCclick={!disp}

></div>
  <input type="color" value={color} onChange={handleChange} />
  
  
  

    
    
    
    
    
    
    </>;
};

export default ColorPicker;
