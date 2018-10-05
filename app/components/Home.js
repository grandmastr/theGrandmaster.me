let React = require('react');
let Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>
                    Battle your friends and stuff.....
                </h1>
                <Link className="button" to="/battle"/>
            </div>
        )
    }
}
module.exports = Home;