import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Anton',
  },
  bold: {
    fontWeight: 'bold',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    //   marginTop: theme.spacing(1),
    //   marginBottom: theme.spacing(2),
  },
  main: {
    color: '#fafae6',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  //   footer: {
  //     padding: theme.spacing(1, 2),
  //     marginTop: 'auto',
  //     backgroundColor:
  //       theme.palette.type === 'light'
  //         ? theme.palette.grey[200]
  //         : theme.palette.grey[800],
  //     minHeight: '10vh',
  //   },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography className={classes.title} variant="h3" component="h1">
          Covid-19 Tracker
        </Typography>
        {/* <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography> */}
        <Typography variant="body1" className={classes.bold}>
          Tracking Global and Country Data
        </Typography>
      </Container>
    </div>
  );
}
