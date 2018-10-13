let React = require('react');

class Results extends React.Component {
    render() {
        console.log(this.props);
        return(
            <h1>
                Results
            </h1>
        )
    }
}
module.exports = Results;