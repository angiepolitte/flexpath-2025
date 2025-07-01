function evaluateExpression(funcA, funcB, funcC) {
  return funcA() || (funcB() && !funcC());
}

// Testing
function funcA() {
  console.log("funcA called");
  return false;
}

function funcB() {
  console.log("funcB called");
  return true;
}

function funcC() {
  console.log("funcC called");
  return false;
}

// Outputs: funcA called, funcB called, funcC called, true
console.log(evaluateExpression(funcA, funcB, funcC));

/*

  Explanation:

  The || operator short-circuits if funcA() returns true.
  The && operator ensures funcC() is only called if funcB() returns true.
  The ! operator negates the result of funcC().

*/
