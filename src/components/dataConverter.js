import React, { Component } from 'react';
class DataConverter extends Component {
  mapDataPoints = () => {
    let totalCases = this.props.worldHistoryData.totalCases || {};
    if (!!totalCases !== {}) {
      let totalCasesDataSet = Object.keys(totalCases).reduce((array, key) => {
        return [...array, { x: key, y: totalCases[key] }];
      }, []);
    }
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
