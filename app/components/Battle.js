let React = require('react');

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString()
        };
        this.updateTime = this.updateTime.bind(this);
    }
    componentDidMount() {
        setInterval(this.updateTime,'1000');
    }
    updateTime() {
        this.setState(() => {
            return {
                time: new Date().toLocaleTimeString()
            }
        });
    }
    render() {
        return (
            <div>
                <h2>
                    { this.state.time }
                </h2>
            </div>
        )
    }
}
module.exports = Battle;