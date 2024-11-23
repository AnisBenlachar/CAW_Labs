import React from 'react';
import ClickMeButton from './components/ClickMeButton';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import ButtonTracker from './components/ButtonTracker';
import DisplayTab from './components/DisplayTab';
import AuthenticationForm from './components/AuthenticationForm';
import DivAdder from './components/DivAdder';

function App() {
  return (
    <div>
      <h1>React Component Testing</h1>
      <ClickMeButton />
      <ToggleButton />
      <Counter />
      <ButtonTracker />
      <DisplayTab table={["hello", "world", "from", "react"]} />
      <DisplayTab table={["React", "is", "fun", "to", "learn"]} />
      <AuthenticationForm />
      <DivAdder /> {/* Add the DivAdder component */}
    </div>
  );
}

export default App;
