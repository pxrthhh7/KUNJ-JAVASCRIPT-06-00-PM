// 2. Task
window.alert("Hello World !") 

// 3. Task
let x = 10;
console.log("x = ",x)

const y = 20;
console.log("y = ",y)

var z = x+y;
console.log("x + y = ",z)


// 4. Task
window.alert("1. Addition, 2. Subtraction, 3. Multiplication, 4. Division")
let user = Number(prompt("Enter Your Choice : "))

let a = ""
let b = ""
let result = ""

switch (user) {
    case 1:
        a = Number(prompt("Enter First Value : "))
        b = Number(prompt("Enter Second Value : "))

        document.getElementById("result").style.color = "red"
        result = a+b
        document.getElementById("result").textContent = "A + B = " + (result);
        break;
    case 2:
        a = Number(prompt("Enter First Value : "))
        b = Number(prompt("Enter Second Value : "))

        document.getElementById("result").style.color = "blue"
        result = a-b
        document.getElementById("result").textContent = "A - B = " + (result);
        break;
    case 3:
        a = Number(prompt("Enter First Value : "))
        b = Number(prompt("Enter Second Value : "))

        document.getElementById("result").style.color = "green"
        result = a*b
        document.getElementById("result").textContent = "A * B = " + (result);
        break;
    case 4:
        a = Number(prompt("Enter First Value : "))
        b = Number(prompt("Enter Second Value : "))

        document.getElementById("result").style.color = "yellow"
        result = a/b
        document.getElementById("result").textContent = "A / B = " + (result);
        break;
    default:
        document.getElementById("result").textContent = "Enter a Value Between 1 to 4 !";
        break;
}
