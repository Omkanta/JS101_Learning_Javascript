// Print the Calendar date in the below format
// 1-1
// 2-1
// // 3-1
let days=0;
for(let i=1;i<=12;i++){
  if(i==2){
    days=28;
  }
  else if(i==4 || i==6 || i==9 || i==11){
    days=30;
  }
  else
    days=31;
  for(let j=1;j<=days;j++){
    console.log(j+"-"+i);
  }
}