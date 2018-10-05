let React = require('react');
let Popular = require('./Popular');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container">
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}
module.exports = App;