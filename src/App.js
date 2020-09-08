import React from 'react';
import './App.css';
import Row from './Row';

import requests from './requests';
function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="NETFLIIX ORIGINALS" fatchUrl={requests.fatchNetflixOriginals} />
      <Row title="Tranding Now" fatchUrl={requests.fatchTrending} />
    </div>
  );
}

export default App;
