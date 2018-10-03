let React = require('react');
let PropTypes = require('prop-types');
let api = require('../utils/api');
function SelectLanguage(props) {
    let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
    return(
        <ul className="languages">
            {languages.map(language => <li style={language === props.selectedLanguage ? {color: '#00AFF0'}: null} onClick={props.onSelect.bind(null, language)} key={language}> { language } </li>)}
        </ul>
    )
}
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
            <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
        )
    }
}
module.exports = Popular;