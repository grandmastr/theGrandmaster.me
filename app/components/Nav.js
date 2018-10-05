let React = require('react');
let Link  =  require('react-router-dom').Link;
let NavLink = require('react-router-dom').NavLink;

const Nav = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/battle">
                    Battle
                </NavLink>
                <NavLink activeClassName="active" to="/popular">
                    Popular
                </NavLink>
            </li>
        </ul>
    )
};
module.exports = Nav;