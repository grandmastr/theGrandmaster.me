let React = require('react');
let queryString = require('query-string');
class Results extends React.Component {
    render() {
        let players = queryString.parse(this.props.location.search);
        console.log(this.props);
        return(
            <h1>
                Results
            </h1>
        )
    }
}
module.exports = Results;