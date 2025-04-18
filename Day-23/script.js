let myform = document.getElementById("myform")

myform.addEventListener("submit", function (e) {

    e.preventDefault()

    let name = document.getElementById("Name").value
    let email = document.getElementById("Email").value

    const userData = 
    {
        Name: name,
        Email: email
    }

    localStorage.setItem("userData1", JSON.stringify(userData))

    window.location.href = "output.html";

})