var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));



class HelloUser extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}

ReactDOM.render(<HelloUser name="Chris" />, document.getElementById('app'));

//-----------------------------------------------------------------------------------------
// map and filter together.

class Users extends React.Component {
    render() {
        return (
          <div>
            <h1>Friends</h1>
            <ul>
                {this.props.list.filter(function(friend) {
                    return friend.friend === true;
                }).map(function(friend){
                    return <li key={friend.name}> {friend.name}</li>
                })}
        {/*Create an <li> for every name in the list array who is also your friend*/}
    </ul>
        
    <hr />
        
    <h1> Non Friends </h1>
    <ul>
        {this.props.list.filter(function(friend) {
            return friend.friend != true;
        }).map(function(friend){
            return <li key={friend.name}> {friend.name}</li>
        })}
    {/*Create an <li> for every name in the list array who is NOT your friend*/}
    </ul>        
  </div>
      )
  }
}

ReactDOM.render(
  <Users list={[
{ name: 'Tyler', friend: true },
{ name: 'Ryan', friend: true },
{ name: 'Michael', friend: false },
{ name: 'Mikenzi', friend: false },
{ name: 'Jessica', friend: true },
{ name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);


//-----------------------------------------------------------------------------------------
// Avatar
//-----------------------------------------------------------------------------------------

class Avatar extends React.Component {
    render() {
        return (
          <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
    render() {
        return (
          <h1>Name: {this.props.name}</h1>
    )
  }
}

class ScreenName extends React.Component {
    render() {
        return (
          <h3>Username: {this.props.username}</h3>
    )
  }
}

class Badge extends React.Component {
    render() {
        return (
          <div>
            <Avatar img={this.props.user.img}/>
            <Label name={this.props.user.name} />
            <ScreenName username={this.props.user.username}/>
          </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
name: 'Chris Morse',
img: 'https://avatars3.githubusercontent.com/u/333303?v=3&s=460',
username: 'chrismorse'
}} />,
document.getElementById('app')
);

