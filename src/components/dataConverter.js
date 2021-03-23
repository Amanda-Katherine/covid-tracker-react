import React, { Component } from 'react';
class DataConverter extends Component {
  mapDataPoints = () => {
  };
  render() {
    let worldData = this.props.worldHistoryData;

    return (
      <div>
        <>{worldData && this.mapDataPoints()}</>
      </div>
    );
  }
}
