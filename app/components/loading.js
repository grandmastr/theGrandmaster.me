import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        textAlign : "center",
        color: "#00AFF0",
        fontSize: "35px"
    }
};
class Loading extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number.isRequired
    };
    static defaultProps = {
        text: "Loading",
        speed: 300,
    };
    state = {
        text: this.props.text
    };
    componentDidMount() {
        const { text,speed } = this.props;
        const stopper = `${text}...`;
        this.interval = setInterval(() => {
            this.state.text === stopper
                ? this.setState(() => ({ text }))
                : this.setState(({ text }) => ({text: `${text}.`}));
        },speed)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <p className="loading-text" style={ styles.content }>
                { this.state.text }
            </p>
        )
    }
}
export default Loading;