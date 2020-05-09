import React from 'react';

import classes from './NavigationItems.css';

const navigationItems = () => {
    return ( 
        <div className={classes.NavigationItems}>
            <a href="/">Home</a>
            <a href="/">Post</a>
            <a href="/">Logout</a>
        </div>
     );
}

export default navigationItems;