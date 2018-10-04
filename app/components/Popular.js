let React = require('react');
let PropTypes = require('prop-types');
let api = require('../utils/api');


const SelectLanguage = (props) => {
    let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
    return(
        <ul className="languages">
            {languages.map(language => <li style={language === props.selectedLanguage ? {color: '#00AFF0'}: null} onClick={props.onSelect.bind(null, language)} key={language}> { language } </li>)}
        </ul>
    )
};
const  RepoGrid = (props) => {
    return(
        <ul className="popular-list">
            {props.repos.map((repo,index) => (
                <li key={repo.name} className="popular-item">
                    <div className="popular-rank">
                        #{`${index + 1}`}
                    </div>
                    <ul className="space-list-items">
                        <li>
                            <img className="avatar" src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} />
                        </li>
                        <li className="repo-url">
                            <a href={repo.html_url}>
                                {repo.name}
                            </a>
                        </li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>))}
        </ul>
    )
};
RepoGrid.propeType = {
    repos: PropTypes.array.isRequired
};
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};
class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }
    updateLanguage(lang)  {
        this.setState(function() {
           return {
               selectedLanguage: lang,
               repos: null
           }
        });
        api.fetchPopularRepos(lang)
            .then(function (repos) {
                this.setState(function() {
                   return {
                       repos: repos
                   }
                });
            }.bind(this));
    }
    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
                {!this.state.repos ? <p className="loading-text"> LOADING... </p> : <RepoGrid repos={this.state.repos} />}
            </div>

        )
    }
}
module.exports = Popular;