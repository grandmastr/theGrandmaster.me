let React = require('react');
class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang)  {
        this.setState(function() {
           return {
               selectedLanguage: lang
           }
        });
    }
    render() {
        let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        return (
            <ul className="languages">
                {languages.map(language => <li style={language === this.state.selectedLanguage ? {color: '#00AFF0'}: null} onClick={this.updateLanguage.bind(null, language)} key={language}> { language } </li>)}
            </ul>
        )
    }
}
module.exports = Popular;