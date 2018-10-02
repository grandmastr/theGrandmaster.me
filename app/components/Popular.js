let React = require('react');
let PropTypes = require('prop-types');
let api = require('../utils/Api');
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
        api.fetchPopularRepos(this.state.selectedLanguage)
            .then(function (repos) {
               console.log(repos)
            });
    }//state
//UI
//Lifecycle
    updateLanguage(lang)  {
        this.setState(function() {
           return {
               selectedLanguage: lang,
           }
        });
    }
    render() {
        return (
            <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
        )
    }
}
module.exports = Popular;