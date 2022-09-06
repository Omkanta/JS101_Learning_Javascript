// Given an array of numbers find the average of all
// the even numbers.
let arr=[2,4,5,10,7,12,9,8];
let sum=0;
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);