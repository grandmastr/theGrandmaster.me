import axios from 'axios';

let getProfile = username => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then(user => {
            return user.data;
        })
};
const getRepos = username => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
};
const getStarCount = repos => {
    return repos.data.reduce(
        (count,{ stargazers_count }) => {
            return count + stargazers_count;
        },0);
};
const calculateScore = ({ followers },repos) => {
    let totalStars = getStarCount(repos);
    return (followers * 3 ) + totalStars;
};
const handleError = error => {
    console.warn(error);
    return null;
};
const getUserData = player => {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([profile,repos]) => ({
            profile,
            score: calculateScore(profile,repos)
        }
    ));
};
const sortPlayers = players => players.sort((p1,p2) => p2.score - p1.score );

export function battle(players) {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}
export function fetchPopularRepos(language) {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language: ${language} &sort=stars&order=desc&type=Repositories&per_page=100`);
    return axios.get(encodedURI)
        .then(({data}) => data.items);
}