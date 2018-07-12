let values = [1,2,3,44,53,443,223];
let strings = ["one","tow","three"];
console.log(values);
//values pushed
values.push(45);
console.log("Agter pusing one element",values);
//values popped
let elementpopped = values.pop();
console.log("Aget pooping"+elementpopped,values);
//values left shifted
values.shift();
console.log("After shifting",values);
//splice
//start from index 1 and remove 2 elements
values.splice(1,2,87,23,43)
console.log("After slicing",values);

let num = values;
console.log(num);