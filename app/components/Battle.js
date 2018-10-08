let React = require('react');
let PropTypes = require('prop-types');

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let value = event.target.value;
        this.setState(() => {
            return {
                username: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id,this.state.username)
    }
    render() {
        return(
            <form className="column" onSubmit={ this.handleSubmit }>
                <label htmlFor="username" className="header">
                    { this.props.label }
                </label>
                <input type="text" id="username"
                       placeholder="GitHub Username"
                       autoComplete="off"
                       onChange={ this.handleChange }
                       value={ this.state.username }/>
                <button className="button"
                type="submit"
                disabled={ !this.state.username }>
                    Submit
                </button>
            </form>
        )
    }
}
PlayerInput.propType = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
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
            return newState;
        })
    }
    render() {
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;
        return (
            <div className="row">
                {!playerOneName &&
                <PlayerInput id="playerOne" label="Player One" onSubmit={ this.handleSubmit }/> }

                {!playerTwoName &&
                <PlayerInput id="playerTwo" label="Player Two" onSubmit={ this.handleSubmit }/> }
            </div>
        )
    }
}
module.exports = Battle;