var S_username= "abc@mail.com";
var S_password= "12345";
var G_username= "abc@mail.com";
var G_password="12345";
if (S_username==G_username){
  if(S_password==G_password){
    console.log("Login Successful");
  }
  else{
    console.log("Incorrect Password");
  }
} else{
  console.log("Incorrect Email");
}