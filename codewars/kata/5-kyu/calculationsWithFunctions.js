// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(callback) { return callback ? callback.call(callback,0) : 0 }
function one(callback) { return callback ? callback.call(callback,1) : 1 }
function two(callback) { return callback ? callback.call(callback,2) : 2 }
function three(callback) { return callback ? callback.call(callback,3) : 3 }
function four(callback) { return callback ? callback.call(callback,4) : 4 }
function five(callback) { return callback ? callback.call(callback,5) : 5 }
function six(callback) { return callback ? callback.call(callback,6) : 6 }
function seven(callback) { return callback ? callback.call(callback,7) : 7 }
function eight(callback) { return callback ? callback.call(callback,8) : 8 }
function nine(callback) { return callback ? callback.call(callback,9) : 9 }

function plus(op1) {
  return function(op2) {
    return op1 + op2;
  };
}

function minus(op1) {
  return function(op2) {
    return op2 - op1;
  };
}

function times(op1) { 
  return function(op2) {
    return op1 * op2;
  };
}

function dividedBy(op1) {
  return function(op2) {
    return op2 / op1;
  };
}