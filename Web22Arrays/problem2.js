// Given a character in lower case print the upper case character

let char="k";
let arr1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arr2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(let i=0;i<arr1.length;i++){
  if(arr1[i]==char){
    arr1[i]=arr2[i];
    console.log(arr1[i]);
  }
}