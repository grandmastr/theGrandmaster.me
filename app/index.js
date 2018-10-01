let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

class User extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.username}</h1>
                <p>The courses to be sold to them are as listed below</p>
                <ul>
                    {}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <App username=/>,document.getElementById('app')
);