import React from 'react';
import '../css/navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// pls del this line

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    flexGrow: 1,
    backgroundColor: 'primary.main',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Oswald',
    fontSize: '25px',
    textTransform: 'uppercase',
  },
  button: {
    flexGrow: 1,
    fontFamily: 'Merriweather',
    fontSize: '15px',
    textTransform: 'uppercase',
  },
  items: {
    color: '#fff',
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: 'Merriweather',
    fontSize: '15px',
    textTransform: 'uppercase',
    marginLeft: '30px',
    height: '100%',
    alignSelf: 'center',
    justifyItems: 'center',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root}>
      <AppBar position="fixed">
        <Toolbar bgcolor="primary.main">
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className={classes.items}>
              <a href="." target="_SELF">
                HOME
              </a>
            </div>
            <div className={classes.items}>
              <AnchorLink offset="50" href="#Contact">
                <Button variant="contained" color="secondary">
                  <Typography variant="h6" className={classes.button}>
                    contact
                  </Typography>
                </Button>
              </AnchorLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
