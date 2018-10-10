let React = require('react');

class Results extends React.Component {
    render() {
        console.log(this.props);
        return(
            <h1>
                Result
            </h1>
        )
    }
}
module.exports = Results;