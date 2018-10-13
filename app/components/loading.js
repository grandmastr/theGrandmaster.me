let React = require('react');
let PropTypes = require('prop-types');

let styles = {
    content: {
        textAlign : "center",
        color: "#00AFF0",
        fontSize: "35px"
    }
};
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    componentDidMount() {
        let stopper = `${this.props.text}...`;
        this.interval = setInterval(() => {
            if(this.state.text === stopper) {
                this.setState(() => {
                    return {
                        text: this.props.text
                    }
                });
            } else {
                this.setState((prevState) => {
                    return {
                        text: `${prevState.text}.`
                    }
                });
            }
        },300)
    }
    render() {
        return (
            <p className="loading-text" style={ styles.content }>
                { this.state.text }
            </p>
        )
    }
}
Loading.propTypes = {
    text: PropTypes.string.isRequired
};
Loading.defaultProps = {
    text: "Loading"
};
module.exports = Loading;