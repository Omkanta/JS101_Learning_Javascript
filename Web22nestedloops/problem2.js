// Print Prime Numbers from 1 to given limit
// Let the given limit be 20
for(let i=1;i<=20;i++){
  let count=0;
  for(let j=1;j<=i;j++){
  if(i%j==0){
    count++;
  }
  }
  if(count==2){
    console.log("Prime Number =",i);
  }
}