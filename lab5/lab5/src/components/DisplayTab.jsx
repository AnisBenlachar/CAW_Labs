import React, { useState } from 'react';

function DisplayTab({ table }) {
  const [tab, setTab] = useState(table);

  const removeItem = (indexToRemove) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => removeItem(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;
