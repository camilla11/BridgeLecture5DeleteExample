import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/home-container.js';
import Houses from './containers/houses-container.js';

class App extends Component {
  render() {
    // to pass from componentDidMount to here, we use component state
    return (
        <Router history={browserHistory}>
          <Route path='/' component={Home} >
            <Route path='houses' component={Houses} />
          </Route>
        </Router>
    );
  }
}

// when you import this you can name it whenever you what
export default App;
