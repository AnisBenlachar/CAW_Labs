import React, { useState } from 'react';

function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsClicked(!isClicked)}>ClickMe</button>
      <p>{isClicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
}

export default ToggleButton;
