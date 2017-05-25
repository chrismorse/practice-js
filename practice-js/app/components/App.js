var React = require('react');
var Popular = require('./Popular');

// stateless functional component.  Look ma no class abstraction.
function HelloWorld(props) {
    return (
        <div>Hello World</div>    
    )
}


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
                <HelloWorld />
            </div>
        )
    }
}

module.exports = App;