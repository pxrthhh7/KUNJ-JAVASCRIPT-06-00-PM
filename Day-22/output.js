let savedName = localStorage.getItem("userName");
let savedEmail = localStorage.getItem("userEmail");

let printName = document.getElementById("name")
let printEmail = document.getElementById("mail")

printName.innerHTML = "<p>Your Name is : </p>"  + savedName
printEmail.innerHTML = "<p>Your Email is : </p>"  + savedEmail