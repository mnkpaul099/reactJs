import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
    return ( 
        <ul className={classes.Toolbar}>
            <NavigationItems />
        </ul>
     );
}
 
export default toolbar;