import React, { Component } from 'react';
import TotalChart from './GridCards/totalChart';

class DataConverter extends Component {
  mapDataPoints = () => {
    let totalCases = this.props.worldHistoryData.totalCases || {};
    if (!!totalCases !== {}) {
      let totalCasesDataSet = Object.keys(totalCases).reduce((array, key) => {
        return [...array, { x: key, y: totalCases[key] }];
      }, []);
      return (
        <>
          <TotalChart totalGlobalCasesDataSet={totalCasesDataSet} />
        </>
      );
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
export default DataConverter;
