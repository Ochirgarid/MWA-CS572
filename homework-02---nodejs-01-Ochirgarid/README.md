# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default.

## Exercise 01 Answer

1. `setImmediate` goes to *Check* queue and `setTimeout` goes to *Timer* queue. So if you have low resource execution you can directly send to "Check" using setImmediate without get through I/O which takes most of the time.

2. `process.nextTick` runs the function after current cycle of the eventloop completely finishes, but before the next eventloop starts.
    On the other hand `setImmediate` runs the function in the `check` phase of the current cycle of the eventloop.
3. looked up from this [web-source](https://flaviocopes.com/node-core-modules/)
    1. crypto
    2. fs
    3. console
    4. events
    5. http
    6. path
    7. repl
    8. url
    9. util
    10. timers

## Exercise 02
Complete the necessary Node code to make `pluck(value)` method work asynchronously, pluck will return a new array after removing the value.  
```javascript
// your Node code here...
console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]
```
**Practice:** Try to solve the exercise in many ways, especially using the `Promise` object.
