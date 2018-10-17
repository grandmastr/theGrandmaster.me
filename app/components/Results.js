import React from 'react';
import queryString from 'query-string';
import { battle } from '../utils/api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';
import  Loading from './loading';

const Profile = props => {
    const { avatar_url,login,name,location,company,folloers,following,public_repos,blog } = this.props.info;
    return (
        <PlayerPreview avatar={ avatar_url } username={ login }>
            <ul style={{textAlign: "center"}} className="space-list-items">
                { name && <li> { name } </li>}
                { location && <li> { location } </li> }
                { company && <li> { company } </li> }
                <li> Followers: { followers } </li>
                <li> Following: { following } </li>
                <li> Public Repos: { public_repos } </li>
                { blog && <li> <a href={ blog }> { blog } </a> </li>}
            </ul>
        </PlayerPreview>
    )
};
Profile.propTypes = {
    info: PropTypes.object.isRequired
};
const Player = props => {
    const { label,score,profile } = props;
    return(
        <div>
            <h1 style={{textAlign: "center"}} className="header">
                { label }
            </h1>
            <h3 style={{textAlign: "center"}}>
                { score }
            </h3>
            <Profile info={profile} />
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
        const { playerOneName,playerTwoName } = queryString.parse(this.props.location.search);
        battle([
            playerOneName,
            playerTwoName
        ]).then(results => {
            if(results === null) {
                return this.setState(() => ({
                        error: 'Looks like there was an error,check if both users are on github',
                        loading: false
                    }));
            }
            this.setState(() => ({
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }))
        });
    }


    render() {
        const { error,winner,loser,loading } = this.state;
        if (loading === true) {
            return <Loading/>;
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
export default Results;