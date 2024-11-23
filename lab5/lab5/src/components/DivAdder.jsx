import React, { useState } from 'react';

function DivAdder() {
  const [divs, setDivs] = useState([]); // Stores the list of created divs
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    if (height.trim() && width.trim() && bgColor.trim()) {
      setDivs([...divs, { height, width, bgColor }]); // Add new div to the list
      setHeight('');
      setWidth('');
      setBgColor('');
    }
  };

  return (
    <div>
      <h2>Add Styled Div</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height (px): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Width (px): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Background Color: </label>
          <input
            type="text"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            placeholder="e.g., red or #ff0000"
            required
          />
        </div>
        <button type="submit">Add Div</button>
      </form>

      <h3>Generated Divs</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.bgColor,
              border: '1px solid #000',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DivAdder;
