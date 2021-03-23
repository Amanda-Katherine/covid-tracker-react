import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TallyCard from '../components/GridCards/tallyCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 20,
  },
}));

export default function DataContainer(props) {
  const classes = useStyles();
  const worldData = props.worldData;
  const worldHistoryData = props.worldHistoryData;
  //release conditional once USA default fetch request is created
  if (!!props.countryData) {
    const countryData = props.countryData;
  }
  // const { totalCases, todayCases, totalDeaths, todayDeaths } = props.worldData;
  // debugger;
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper} id="hide">
            xs
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} worldData={worldData}>
            <TallyCard worldData={worldData} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {/* pass in countryData={countryData} once created */}
            <TallyCard worldData={worldData} />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} id="hide">
            xs
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="hide">
            xs
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
        <Grid item xs={2}>
          <Paper className={classes.paper} id="hide">
            xs
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
