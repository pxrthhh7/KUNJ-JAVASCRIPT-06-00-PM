function submit() 
{
    let age = document.getElementById("age").value
    let print = document.getElementById("print")

    try {
        if(age <= 18)throw "You are not eligible for Vote"
        if(age > 18)throw "You are eligible for Vote"
    } catch (error) {
        print.innerText = error
    }
}
