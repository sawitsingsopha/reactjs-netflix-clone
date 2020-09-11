import React from 'react';
import './App.css';
import Row from './Row';
import Banner from "./Banner";
import Navbar from "./Navbar"
import requests from './requests';
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Banner */}
      <Banner/>
      {/* ./Banner */}

      <Row
        title="ผลงานของ Netflix"
        fatchUrl={requests.fatchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="กำลังฮิต" fatchUrl={requests.fatchTrending} />
      <Row title="ฮิตที่ Netflix" fatchUrl={requests.fatchTopReted} />
      <Row title="ภาพยนตร์แอ็﻿ค﻿ชั่﻿น" fatchUrl={requests.fatchActionMovies} />
      <Row title="คอมเมดี้" fatchUrl={requests.fatchComedyMovies} />
      <Row title="ภาพยนตร์สยองขวัญ" fatchUrl={requests.fatchHorrorMovies} />
      <Row title="รายการทีวีโรแมนติก" fatchUrl={requests.fatchRomanceMovies} />
      <Row title="สารคดี" fatchUrl={requests.fatchDocumentaries} />
    </div>
  );
}

export default App;
