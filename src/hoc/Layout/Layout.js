import React, { Component } from 'react';

import classes from './Layout.css';
import Timeline from '../../components/Timeline/Timeline';

class Layout extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={classes.Layout}>
                <nav>
                    <Timeline />
                </nav>
            </div>
         );
    }
}
 
export default Layout;