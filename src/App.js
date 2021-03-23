import React from 'react';
import './App.css';
import Header from './components/Header';
import StickyFooter from './components/Footer';
import Particles from 'react-particles-js';

class App extends React.Component {
  state = {
    worldData: {},
    worldHistoryData: {},
    data: {},
    country: '',
  };
  render() {
    return (
      <div className="App">
        <Header />
        <StickyFooter />

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
