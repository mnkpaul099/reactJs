import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Myapp from './hoc/Myapp/Myapp';

class App extends Component {
  render() {
    return (
      <div>
        <Myapp>
          <Layout />
        </Myapp>
      </div>
    );
  }
}

export default App;
