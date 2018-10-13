let React = require('react');
let queryString = require('query-string');
let api = require('../utils/api');
let Link = require('react-router-dom').Link;
let PropTypes = require('prop-types');
let PlayerPreview = require('./PlayerPreview');

const Profile = props => {
    let info = props.info;
    return (
        <PlayerPreview avatar={ info.avatar_url } username={ info.login }>
            <ul style={{textAlign: "center"}} className="space-list-items">
                { info.name && <li> { info.name } </li>}
                { info.location && <li> { info.location } </li> }
                { info.company && <li> { info.company } </li> }
                <li> Followers: { info.followers } </li>
                <li> Following: { info.following } </li>
                <li> Public Repos: { info.public_repos } </li>
                { info.blog && <li> <a href={ info.blog }> { info.blog } </a> </li>}
            </ul>
        </PlayerPreview>
    )
};
Profile.propTypes = {
    info: PropTypes.object.isRequired
};
const Player = props => {
    return(
        <div>
            <h1 style={{textAlign: "center"}} className="header">
                { props.label }
            </h1>
            <h3 style={{textAlign: "center"}}>
                { props.score }
            </h3>
            <Profile info={props.profile} />
        </div>
    )
};
Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};
class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        };
    }
    componentDidMount() {
        let players = queryString.parse(this.props.location.search);
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(results => {
            if(results === null) {
                return this.setState(() => {
                    return {
                        error: 'Looks like there was an error,check if both users are on github',
                        loading: false
                    }
                });
            }
            this.setState(() => {
                return {
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }
            })
        });
    }


    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;
        if (loading === true) {
            return <p className="loading-text">Loading...</p>
        }
        if(error) {
            return (
                <div>
                    <p>
                        {error}
                    </p>
                    <Link to="/battle">
                        Reset
                    </Link>
                </div>
            )
        }
        return (
            <div>
                <div className="row">
                    <Player label="Winner" score={ winner.score } profile={ winner.profile }/>
                    <Player label="Looser" score={ loser.score } profile={ loser.profile }/>
                </div>
            </div>
        )
    }
}
module.exports = Results;