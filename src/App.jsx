import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className='app'>
      <button
        className={`toggle-btn ${toggled ? 'toggled' : ''}`}
        aria-pressed={toggled}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
    </div>
  );
};

export default App;
