var React = require('react');

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'    //inital state
        }
        this.updateLanguage = this.updateLanguage.bind(this);   //make sure it is always called with the correct 'this' keyword.
    }
    
    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang    
            }
        });
    }

    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'R', 'C#' ];
        return (
            <ul className='languages'>
                {languages.map(function(lang) {
                    return (
                        <li
                            style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                            onClick={this.updateLanguage.bind(null, lang)}   //'this' keyword doesn't matter here... taken care of above.  so pass null (or unbound).   Pass specific language to function.  Remember this is returning a function that will be invoked when clicked on.
                            key={lang}>
                            {lang}
                        </li>
                    )   // 'this' below... you could also use an arrow function (ES6) and then you could lose 'this' at the end.   Arrow functions make it so the context is the same as outside the functions.
                }, this)}     
            </ul>
        )
    }
}

module.exports = Popular;