/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
// Julia Andreeva
function factorial(n) {
  let f=1;
  if (n>=1) {
  for (let i=1; i<=n; i++) {
    f=f*i};
  }
   else if (n==0) {f=1} 
   else {f='nan'};   
   return f}
