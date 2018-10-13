let React = require('react');

class Results extends React.Component {
    render() {
        console.log(this.props);
        return(
            <h1>
                Results are here
            </h1>
        )
    }
}
module.exports = Results;