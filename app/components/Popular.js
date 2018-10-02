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
        console.log(`Up here! ${this}`);
        return (
            <ul className="languages">
                {languages.map(language => <li onClick={this.updateLanguage} key={language}> { language } </li>)}
            </ul>
        )
    }
}
module.exports = Popular;