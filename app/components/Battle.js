let React = require('react');

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(id,username) {
        this.setState(() => {
            var newState = {};
            newState[`${id}Name`] = username;
            newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
        })
    }
    render() {
        return (

        )
    }
}
module.exports = Battle;