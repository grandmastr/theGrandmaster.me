let axios = require('axios');
let getProfile = username => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then(user => {
            return user.data;
        })
};
const getRepos = username => {
    return axios.get(`https://api.github.com/users/${username}/repos&per_page=100`)
};
const getStarCount = repos => {
    return repos.data.reduce(
        (count,repo) => {
            return count + repo.stargazers_count;
        },0);
};
const calculateScore = (profile,repos) => {
    let followers = profile.followers;
    let totalStars = getStarCount(repos);

    return (followers * 3 ) + totalStars;
};
const handleError = error => {
    console.warn(error);
    return null;
};
const getUserData = player => {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(data => {
        let profile = data[0];
        let repos = data[1];

        return {
            profile: profile,
            score: calculateScore(profile,repos)
        }
    });
};
const sortPlayers = players => {
    return player.sort((a,b) => {
        return b.score - a.score;
    })
};
module.exports = {
    battle: players => {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError)
    },
    fetchPopularRepos: language => {
        let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language: ${language} &sort=stars&order=desc&type=Repositories&per_page=100`);
        return axios.get(encodedURI)
            .then(response => {
               return response.data.items
            });
    }
};