// Print the sum of all the multiples of 3 from 0 to the given limit
let i = 0;
end_p = 20;
let count = 0;
while (i <= end_p) {
  if (i % 3 == 0)
    count = count + i;
  i++;
}
console.log(count);