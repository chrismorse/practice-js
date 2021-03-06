﻿
// -----------------------------------------------------------------------------
// Getters & Setters
// -----------------------------------------------------------------------------
var obj = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set b(x) {
        this.a = x / 2;
    }
}

console.log(obj.a);
console.log(obj.b);
obj.b = 50;
console.log(obj.b);


var obj2 = {
    firstName: 'Chris',
    lastName: 'Morse',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        var fullNameArray = value.split(' ');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}

console.log(obj2.firstName);
console.log(obj2.lastName);
console.log(obj2.fullName);
obj2.fullName = "Jeff Sterling";
console.log(obj2.fullName);


// -----------------------------------------------------------------------------
// Object.keys
// -----------------------------------------------------------------------------
var dictionary = {
    "yolo": "you only live once",
    "gg": "good game",
    "swag": "sup"
}

var keys = Object.keys(dictionary);

var upperKeys = keys.map(function (key) {
    return key.toUpperCase();
});

console.log(upperKeys);


// -----------------------------------------------------------------------------
// Map
//
//  Use it when: You want to translate/map all elements in an array to another set of values.
// -----------------------------------------------------------------------------
var obj = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4
}

var keys = Object.keys(obj);

var timesTwo = keys.map(function (key) {
    return obj[key] * 2;
})

console.log(timesTwo);


// -----------------------------------------------------------------------------
// Filter
//
//  Use it when: You want to remove unwanted elements based on a condition.
// -----------------------------------------------------------------------------

var even = keys.filter(function (elem) {   // can also have access to i, array itself.  
    return obj[elem] % 2 === 0;
});

console.log(even);



// -----------------------------------------------------------------------------
// Reduce
//
//   Use it when: You want to find a cumulative or concatenated value based on elements across the array.
// -----------------------------------------------------------------------------

var sum = keys.reduce(function (prevVal, elem) {
    return prevVal + obj[elem];
}, 0);

console.log(sum);


// -----------------------------------------------------------------------------
// Array.forEach
// -----------------------------------------------------------------------------

keys.forEach(function(key) {
    console.log('My number is ' + key);
});







// -----------------------------------------------------------------------------
// Arrow functions
//
//   more straight forward to maintain parent object scope in a callback or method.   (vs using _this as a copy of this)
// -----------------------------------------------------------------------------

var object = {
    collection: ['patrick', 'scott', 'mike'],
    domain: 'angularclass.com',
    method: function method() {
        var mapEmail = function (item) {
            return item + '@' + this.domain;
        }.bind(this)
        return this.collection.map(mapEmail)
    }
};

console.log(object.method());

// same thing but with arrow functions  -- no need to bind.

var object2 = {
    collection: ['patrick', 'scott', 'mike'],
    domain: 'angularclass.com',
    method: function method() {
        return this.collection.map(item => {
            return `${ item}@${ this.domain}`;     //back tick is string interpolation.
        });
    }
};


console.log(object2.method());


// -----------------------------------------------------------------------------
// Classes
// -----------------------------------------------------------------------------

//ES5
var App = function() {
    console.log('hello');
}

App.prototype.method = function() {
    console.log('hello from method');
}

var app = new App();
app.method();


//ES 2015
class AppES2015 {
    constructor() {
        console.log('hello ES2015');
    }
    method() {
        console.log('method called from 2015');
    }
}


var appES2015 = new AppES2015();
appES2015.method();






// -----------------------------------------------------------------------------
// Promises
// -----------------------------------------------------------------------------




// -----------------------------------------------------------------------------
// Observables
// -----------------------------------------------------------------------------




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





//-----------------------------------------------------------------------------------------
// typeof
//-----------------------------------------------------------------------------------------

var testNull = null;
console.log("null is typeof " + typeof(testNull));  //hmm.. so you need to check whether its null not just type

var testObject = {"asdf": 2};
console.log("object is typeof " + typeof(testObject));

var testArray = [1,2,3,4];
console.log("array is typeof " + typeof(testArray));

console.log("37 is typeof " + typeof(37));

console.log("true is typeof " + typeof(true));

console.log("'s' is typeof " + typeof('s'));

(function(){
    var a = b = 3;
})();
// same as 
//    b = 3;
//    var a = b;

console.log(typeof(a));  //not defined - since using var inside function scope
console.log(b);   // is a global since not preceded by var, so is still in scope and equal 3



//-----------------------------------------------------------------------------------------
// is palindrome
//-----------------------------------------------------------------------------------------

function isPalindrome(str) {
    for (var i = 0, j=str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

console.log("racecar is palindrome? " + isPalindrome("racedecar"));
console.log("raccar is palindrome? " + isPalindrome("raccar"));
console.log("raccsar is palindrome? " + isPalindrome("raccsar"));




//-----------------------------------------------------------------------------------------
// sum method that works with 2 diff calls.
//-----------------------------------------------------------------------------------------

function newSum(x,y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(y) {
            return x + y;
        }
    }
    return true;
}


console.log(newSum(2,3));   // Outputs 5
console.log(newSum(2)(3));  // Outputs 5



//-----------------------------------------------------------------------------------------
// sum method that works with 2 diff calls.
//-----------------------------------------------------------------------------------------
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}



//-----------------------------------------------------------------------------------------
// array problem
//-----------------------------------------------------------------------------------------
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

console.log(arr1);
console.log(arr2);
console.log(arr3);


function multiply(a, b) {
return a * b;
}

console.log(multiply(2,3));


