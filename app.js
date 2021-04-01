// ES2015 Object Destructuring
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;

let { a, b } = obj.numbers;

// ES5 Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults()
const raceResults = ( [first, second, third, ...rest] ) => {
  return {
    first,
    second,
    third,
    rest
  };
}
console.log( raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]) );