// your Node code here...
Array.prototype.pluck = function (value) {
	let result = [];
	for(let i = 0; i < this.length; i++) {
		if(this[i] != value) {
			result.push(this[i])
		}
	
	}
	console.log(result)
	return new Promise((resolve) => {resolve(result)})
}
console.log('start');
[1,2,3,4,5,6,7,8].pluck(3).then(console.log);
[1,2,3,4,5,6,7,8].pluck(6).then(console.log);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]
