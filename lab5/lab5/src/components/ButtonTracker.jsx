import React, { useState } from 'react';

function ButtonTracker() {
  const [message, setMessage] = useState(''); // State to track which button was clicked

  return (
    <div>
      {/* Three buttons with click handlers */}
      <button onClick={() => setMessage('Button #1 was clicked')}>Button1</button>
      <button onClick={() => setMessage('Button #2 was clicked')}>Button2</button>
      <button onClick={() => setMessage('Button #3 was clicked')}>Button3</button>

      {/* Paragraph to display the message */}
      <p>{message}</p>
    </div>
  );
}

export default ButtonTracker;
