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
        <Grid item xs={4}>
          <Paper className={classes.paper} worldData={worldData}>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
