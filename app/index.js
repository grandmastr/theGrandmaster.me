let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

let listOfCourses = [
    { name: 'Israel', friend: false },
    { name: 'Temi', friend: true },
    { name: 'Toba', friend: false },
    { name: 'Jade', friend: true }
];

class User extends React.Component {
    render() {
        let friends = this.props.courses.filter(name => name.friend === true);
        let notFriend = this.props.courses.filter(name => name.friend !== true);
        return(
            <div>
                <h1> {this.props.username} </h1>
                <p> Your friends are listed below </p>
                <ul>
                    { friends.map(name => <li key={ name.name }> { name.name } </li>) }
                </ul>
                <h1> {this.props.username} </h1>
                <p> The courses you are offering are as listed below </p>
                <ul>
                    { notFriend.map(name => <li key={ name.name }> { name.name } </li>) }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <User username={"theGrandmaster"} courses={listOfCourses}/>,document.getElementById('app')
);