// import React from "react";
// //import "./App.css";
// import DataDuplicationAlert from './components/DataDuplicationAlert';
// //import TextForm from './components/TextForm';

// function App() {
//   return (
//     <>
//       <DataDuplicationAlert />
//     </>
//   );
// }

// export default App;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    < div className="container">
      {/* Hamburger Menu */}
      <div className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Main Title */}
      <h1 className="title">Data Duplication Alert System</h1>

      {/* Two Cards Section */}
      <div className="cards-container">
        <div className="card">
          <img src="/dataone.jpg" alt="Similarity Check" className="icon" />
          {/* <p className="card-title">Similarity Check</p> */}
          <button className="chrome-button1">Similarity Check</button>
        </div>
        <div className="card1">
          <img src="/datathree.jpg" alt="Dashboard" className="icon1" />
          {/* <p className="card-title">Dashboard</p> */}
          <p className="card-text">A personalized <br></br> dashboard which <br></br> provides real-time <br></br> updates</p>
          <button className="chrome-button2">Dashboard</button>
      </div>
      </div>
      {/* Chrome Extension Section */}
      <div className="chrome-card">
        <img src="/datatwo.jpg" alt="Chrome Extension" className="chrome-icon" />
        <div className="chrome-content">
          <p className="chrome-text">
            Download the Chrome <br>
            </br>extension of our app now, to <br></br>protect your system from <br></br>duplicate downloads
          </p>
          <button className="chrome-button3">Chrome Extension</button>
        </div>
      </div>
    </div>
  );
}

export default App;
