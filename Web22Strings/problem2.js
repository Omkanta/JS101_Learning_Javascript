// Given an array of string count the overall total number of characters
let arr=["A","good","example"];
let S_count=0;
for(let i=0;i<arr.length;i++){
  S_count+=arr[i].length;
}
console.log(S_count);