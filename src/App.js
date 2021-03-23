import logo from './logo.svg';
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// function App() {
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 53,
                density: {
                  enable: true,
                  value_area: 561,
                },
              },

              opacity: {
                value: 0.0561194221302933,
                random: true,
              },
              size: {
                value: 3,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                speed: 1.6,
                direction: 'none',

                bounce: false,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 73.08694910712106,
                  duration: 0.4,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    );
  }
}
export default App;
