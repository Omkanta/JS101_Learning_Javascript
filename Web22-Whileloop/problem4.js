// Print the average of even numbers from 1 to 100 (both included)
let i = 1;
let num = 0;
let sum = 0;
while (i <= 100) {
  if (i % 2 == 0) {
    sum = sum + i;
    num++;
  }
  i++;
}
console.log(sum / num);