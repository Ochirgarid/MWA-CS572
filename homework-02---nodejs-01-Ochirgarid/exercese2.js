// your Node code here...
Array.prototype.pluck = function(val) {
    self = this;
    setTimeout(() => console.log(self), val * 1000);
};

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]