import React, { Component } from 'react';

import classes from './Layout.css';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={classes.Layout}>
                <h1>Hello World</h1>
            </div>
         );
    }
}
 
export default Layout;