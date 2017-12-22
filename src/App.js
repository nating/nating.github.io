import React, { Component } from 'react';
import react from './react.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import mail from './gmail.svg';
import evopass from './evopass.svg';
import dab from './skeleton-dab.svg';
import vdp from './vdp2.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Geoffrey Natin</h1>
        </header>
        */}
        <div className="Container">
          <div className="Name-container" >
            <p>Geoffrey Natin</p>
            <div className="Logos-container">
              <a href="https://github.com/nating">
                <img src={github} className="Logo" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/geoffreynatin">
                <img src={linkedin} className="Logo" alt="linkedin" />
              </a>
            </div>
          </div>
            <div className="Content-container">
              <div className="Personal-details-container">
                <div className="Personal-detail">
                  <a href="https://facebook.github.io/react-native/">
                    <img src={react} className="Spinning-detail-logo" alt="react" />
                  </a>
                  <p>React Native enthusiast.</p>
                </div>
                <div className="Personal-detail">
                  <a href="https://evopass.io">
                    <img src={evopass} className="Detail-logo" alt="evopass" />
                  </a>
                  <p>Full stack developer at</p>
                </div>
                <div className="Personal-detail">
                  <a href="https://trinityvdp.com">
                    <img src={vdp} className="Detail-logo" alt="trinity-vdp" />
                  </a>
                  <p>Volunteer with</p>
                </div>
                <div className="Personal-detail">
                  <img src={dab} className="Detail-logo" alt="linkedin" />
                  {/*<p>Living in the Silicon Docks!</p>*/}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
