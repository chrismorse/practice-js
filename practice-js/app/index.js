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
//  - PropTypes
//-----------------------------------------------------------------------------------------

var PropTypes = require('prop-types');


class Avatar extends React.Component {
    render() {
        return (
          <img 
            src={this.props.img} 
            alt='Avatar'
            style={{width:100, height:100}}
            />
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
            <Avatar img={this.props.img}/>
            <Label name={this.props.name} />
            <ScreenName username={this.props.username}/>
          </div>
    )
  }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}


ReactDOM.render(
  <Badge 
    name='Chris Morse'
    img='https://avatars3.githubusercontent.com/u/333303?v=3&s=460'
    username='chrismorse'
     />,
document.getElementById('app')
);



//-----------------------------------------------------------------------------------------
// this keyword + managing & updating state.
//-----------------------------------------------------------------------------------------

// Implicit Binding
// - when function is invoked.  Look to the left of the dot at run time
//-----------------------------------------------------------------------------------------

var me = {
    name: 'Chris',
    age: 25, 
    sayName: function() {
        console.log(this.name);
    }
};

var you = {
    name: 'Tyler',
    age: 25, 
}

var sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    };
}

me.sayName();  //Chris

sayNameMixin(me);
me.sayName();  //Chris

sayNameMixin(you);
you.sayName();  //Tyler

var Person = function(name,age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: 'Stacey',
            sayName: function() {
                console.log(this.name);
            }
        }
    }
}

var jim = Person('jim', 42);
jim.sayName();  //jim
jim.mother.sayName();  //Stacey


//-----------------------------------------------------------------------------------------
// Explicit Binding
//-----------------------------------------------------------------------------------------

var sayName = function() {
    console.log('My name is ' + this.name);
}

var stacey = {
    name: 'Stacey',
    age: 34
}

sayName.call(stacey);   //explicit binding with call

var sayName2 = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
}

var languages = ['C#', 'C++', 'Python'];

sayName2.call(stacey, languages[0], languages[1], languages[2]);   //first argument is context, every other argument is past to function as a normal object
sayName2.apply(stacey, languages);   //same thing as above.. but it will automatically split out the array of arguments for you.

var newfunction = sayName2.bind(stacey, languages[0], languages[1], languages[2]);   //returns a function instead of binding.
console.log('---------');
newfunction();


//-----------------------------------------------------------------------------------------
// new and window binding
//-----------------------------------------------------------------------------------------

// new binding

var Animal = function(color, name, type) {
    //this = {}   - since we are using new keyword.  Javascript with create a new object
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');   // new keyword.
console.log(zebra.color);


// window binding
var sayAge = function() {
    console.log(this.age);
};


sayAge();   //since not using call,bind, etc.. .or new keyword.  And nothing to the left of dot.   It defaults to the window object.  --> undefined

window.age = 35;
sayAge();

// must be calling 'use script' somewhere?  Since this doesn't work.






