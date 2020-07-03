import React from 'react';
// COMPONENTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from "@material-ui/core/Divider";


const styles = () => ({
  grow: {
    flexGrow: 1,
  },

});

const Header = ({ classes }) => (
  <React.Fragment>
    <AppBar
      className={'third-app-bar'}
      color={'primary'}
      position={'static'}
      elevation={0}
    >
      <Toolbar>
        <Typography color={'inherit'} variant={'h5'} className={classes.grow}>
          Dashboard
        </Typography>
        <SearchIcon />
      </Toolbar>
    </AppBar>
    <Divider variant="middle" />
    <AppBar
      className={'fourth-app-bar'}
      color={'primary'}
      position={'static'}
      elevation={0}
    >
      <Tabs value={0} textColor={'inherit'}>
        <Tab textColor={'inherit'} label="ROCKETS" />
        <Tab textColor={'inherit'} label="SATELLITES" />
      </Tabs>
    </AppBar>
  </React.Fragment>
);

export default withStyles(styles)(Header);
