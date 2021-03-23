const worldTotalUrl = 'https://disease.sh/v3/covid-19/all';
const worldHistoryUrl =
  'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

export const fetchWorldData = async () => {
  const response = await fetch(`${worldTotalUrl}`);
  const data = await response.json();
  let worldVariables = {
    totalCases: data.cases,
    todayCases: data.todayCases,
    totalDeaths: data.deaths,
    todayDeaths: data.todayDeaths,
  };
  console.log(data);
  console.log(worldVariables);
  return worldVariables;
};

export const fetchWorldHistoryData = async () => {
  const response = await fetch(`${worldHistoryUrl}`);
  const historyData = await response.json();
  let worldHistoryVariables = {
    totalCases: historyData.cases,
    totalDeaths: historyData.deaths,
  };
  console.log(historyData);
  console.log(worldHistoryVariables);
  //   debugger;
  return worldHistoryVariables;
};
