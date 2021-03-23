import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  //   root: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     minHeight: '100vh',
  //   },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(1, 2),
    marginTop: 'auto',
    marginBottom: 0,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    minHeight: '10vh',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.main}></div>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" color="textSecondary">
            Data Obtained from the Novel COVID API
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </footer>
    </div>
  );
}
