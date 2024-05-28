// const arr = [10, 8, 40, 0, 12, 32, 12, 1, 3, 66, 13, 21];

// let min = Math.min(...arr);
// let max = Math.max(...arr);

// const dubArr = [];
// for (let i = min; i <= max; i++) {
//   if (!arr.includes(i)) {
//     dubArr.push(i);
//   }
// }
// console.log('this is min', min, max);
// console.log('Missing numbers:', dubArr);



// {****** JavScript Challenge 1  *********}

// const arg = "Hello World"
// var createHelloWorld = function (arg) {

//     return function()
//     {return arg}
// }
// createHelloWorld(arg)


// {****** JavScript Challenge 2  *********}

// var createCounter =function(n){
//     return function(){
//         return  n++
//     }
// }
//  let result = createCounter(10)
//  console.log(result(),result(),result())



// {****** JavScript Challenge 3  *********}

var expect = function(val) {
    function toBe(test){
        if(val === test){
             return true;
        }
    }
    return toBe()
};

console.log(expect(3).toBe(3))