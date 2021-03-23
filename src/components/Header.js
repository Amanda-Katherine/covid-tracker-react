import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    color: '#fafae6',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3" component="h1">
        </Typography>
        <Typography variant="body1">
          Tracking Global and Country Data
        </Typography>
      </Container>
    </div>
  );
}
