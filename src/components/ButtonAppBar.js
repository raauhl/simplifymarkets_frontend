import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import mainLogo from '../images/logo.png'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PublicIcon from '@material-ui/icons/Public';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '5rem',
  },

  appBar: {
    background: '#F8F8F8',
    paddingRight: 0
  },

  menuButton: {
    marginRight: theme.spacing(3),
  },

  logoContainer: {
    flexGrow: 1,
  },

  logo: {
    height: '2.2rem',
    marginRight: '0.8rem'
  },

  loginButton: {
    marginLeft: 8,
    marginRight: 0,
    padding: 0,
  },

  list: {
    width: 250,
  },

  fullList: {
    width: 'auto',
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon><OfflineBoltIcon/></ListItemIcon>
          <ListItemText primary='Cryptocurrency' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShowChartIcon/></ListItemIcon>
          <ListItemText primary='Stocks' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
          <ListItemText primary='Forex' />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PublicIcon/></ListItemIcon>
          <ListItemText primary='Commodity' />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon fontSize="medium"/>
          </IconButton>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={mainLogo} alt="Simplify Markets" ></img>
          </div>
          <IconButton edge="start" className={classes.loginButton} aria-label="login">
            <AccountCircleIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}
