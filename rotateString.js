/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) {
    return true;
  }
  let firststr = s.charAt(0);

  
  for (let i = 1; i < s.length; i++) {
    let value = s.slice(i,s.length);
    value = value.concat(firststr);
    firststr = firststr.concat(value.charAt(0));
    if (value === goal) {
      return true;
    }
  }
  return false;
};

// optimization 

var rotateString2 = function (s, goal) {
    if(s.length !== goal.length) return false;
    goal +=goal;
    return goal.includes(s);
  };
  
console.log(rotateString2('abcde','cdeab'))
