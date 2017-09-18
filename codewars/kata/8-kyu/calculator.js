function calculator(a,b,sign){
    if (['+','-','*','/'].indexOf(sign) >= 0) {
      if (typeof a === 'number' && typeof b === 'number')  {
        return eval(a + sign + b);
      }
    } 
    return "unknown value"
  }
