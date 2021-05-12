import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PublicIcon from '@material-ui/icons/Public';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
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
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer('left', true)}>Drawer</Button>
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
