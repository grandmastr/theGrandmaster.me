import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Result from'./Results';


class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/popular" component={Popular} />
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/battle/results" component={Result}/>
                        <Route render={ () => <div> 404 Not Found </div> }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;