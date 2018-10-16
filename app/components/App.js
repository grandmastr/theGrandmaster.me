const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Popular = require('./Popular');
const Result = require('./Results');


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
module.exports = App;