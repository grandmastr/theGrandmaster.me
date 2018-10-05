let React = require('react');
let Popular = require('./Popular');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Nav = require('./Nav');
let Home = require('./Home');
class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container">
                    <Nav />
                    <Route exact path="/" component={Home}/>
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}
module.exports = App;