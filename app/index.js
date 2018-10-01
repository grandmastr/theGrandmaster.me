let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

let listOfCourses = [
    'English','Yoruba','French','Portugese','Spanish'
];

class User extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.username}</h1>
                <p> The courses you are offering are as listed below </p>
                <ul>
                    {this.props.courses.map( n => <li> {n} </li>)}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <User username={"theGrandmaster"} courses={listOfCourses}/>,document.getElementById('app')
);