let React = require('react');


class PlayerInput extends React.Component {
    render() {
        return(

        )
    }
}
PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onsubmit: PropTypes.func.isRequired
};
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
            let newState = {};
            newState[`${id}Name`] = username;
            newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
        })
    }
    render() {
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;
        return (
            <div className="row">
                { !playerOneName &&
                <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit}/> }

                { !playerTwoName &&
                <playerInut id="playerTwo" label="player Two" onSubmit={this.handleSubmit}/> }
            </div>
        )
    }
}
module.exports = Battle;