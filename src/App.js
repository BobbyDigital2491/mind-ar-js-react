import React, { useState } from 'react';
import './App.css';
import MindARViewer from './mindar-viewer';
import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>Augmentique App </h1>

      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>See Assets</button>}
        {<><br /><br /></>}
        {started === null && <button onClick={() => {setStarted('three')}}>AR Videos</button>}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container">
          <MindARViewer/>
          <video></video>
        </div>
      )}

      {started === 'three' && (
        <div className="container">
          <MindARThreeViewer />
        </div>
      )}
    </div>
  );
}

export default App;
