import React from 'react';
import PropTypes from'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

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
        this.setState(() => ({username: value}));
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id,this.state.username)
    }
    render() {
        const { username } = this.state;
        const { label } = this.props;
        return(
            <form className="column" onSubmit={ this.handleSubmit }>
                <label htmlFor="username" className="header">
                    { label }
                </label>
                <input type="text" id="username"
                       placeholder="GitHub Username"
                       autoComplete="off"
                       onChange={ this.handleChange }
                       value={ username }/>
                <button className="button"
                type="submit"
                disabled={ !username }>
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleSubmit(id,username) {
        this.setState(() => {
            let newState = {
                [`${id}Name`] : username,
                [`${id}Image`] : `https://github.com/${username}.png?size=200`
            };
            return newState;
        })
    }
    handleReset(id) {
        this.setState(() => {
            let newState = {
                [`${id}Name`] : '',
                [`${id}Image`] : null
            };
            return newState;
        });
    }
    render() {
        const { match } = this.props;
        const { playerOneName,playerTwoName,playerOneImage,playerTwoImage } = this.state;
        return (
            <div>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput id="playerOne" label="Player One" onSubmit={ this.handleSubmit }/> }

                    {!playerTwoName &&
                    <PlayerInput id="playerTwo" label="Player Two" onSubmit={ this.handleSubmit }/> }

                    {playerOneImage !== null &&
                    <PlayerPreview avatar={playerOneImage} username={playerOneName}>
                        <button className="reset" onClick={() => this.handleReset("playerOne")}>
                            Reset
                        </button>
                    </PlayerPreview>}

                    {playerTwoImage !== null &&
                    <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
                        <button className="reset" onClick={() => this.handleReset("playerTwo")}>
                            Reset
                        </button>
                    </PlayerPreview>}
                </div>
                {playerOneImage && playerTwoImage &&
                <Link className="button" to={
                    {
                        pathname: `${match.url}/results`,
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }
                }>
                    Battle
                </Link>
                }
            </div>
        )
    }
}
export default Battle;