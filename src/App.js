import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';

import Posts from './containers/Posts/Posts';

const notfound = () => {
    return (
        <p>Not found</p>
    )
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                </div>
                {/**Basic routes here (main routes) */}
                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route component={notfound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;