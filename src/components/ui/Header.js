import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
function ElevationScroll(props) {
  const { children } = props;

  // hook from material ui
  // event listener when user is scrolling
  const trigger = useScrollTrigger({
    disableHysteresis: true, // disable delay when user is scrolling
    // how far user has to start scrolling before it triggers this event listener
    threshold: 0, // default is 100
  });

  // returns new version of component wrapped with ElevationScroll
  // Tt clones the children & returns a new copy of that element with new elevation
  // depending on whether or not the trigger has been set. 
  return React.cloneElement(children, {
    // if our event listener has set this trigger,
    // it will have an elevation of 4 - our floating state, otherwise
    // it will remain flat with elevation of 0
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar>Nepal World Wide</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
