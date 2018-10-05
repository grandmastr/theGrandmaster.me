let React = require('react');
let Popular = require('./Popular');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;
let Nav = require('./Nav');
let Home = require('./Home');
let Battle = require('./Battle');
class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/popular" component={Popular} />
                        <Route path="/battle" component={Battle}/>
                        <Route render={ () => <div> 404 Not Found </div> }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
module.exports = App;