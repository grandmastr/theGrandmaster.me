let React = require('react');
let Popular = require('./Popular');
class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Popular />
            </div>
        )
    }
}
module.exports = App;