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
module.exports = {
    fetchPopularRepos: language => {
        let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language: ${language} &sort=stars&order=desc&type=Repositories&per_page=100`);
        return axios.get(encodedURI)
            .then(response => {
               return response.data.items
            });
    }
};