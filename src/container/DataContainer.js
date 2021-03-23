import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
