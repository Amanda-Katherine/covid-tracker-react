import React, { Component } from 'react';
class DataConverter extends Component {
  mapDataPoints = () => {
    let totalCases = this.props.worldHistoryData.totalCases || {};
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
