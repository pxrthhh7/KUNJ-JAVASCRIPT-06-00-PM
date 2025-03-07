function submit()
{
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let temp = ""
    
    document.getElementById("before").textContent = "Before Swapping"
    document.getElementById("a1").textContent = "Value of A : " + a
    document.getElementById("b1").textContent = "Value of B : " + b


    temp = a
    a = b
    b = temp

    document.getElementById("after").textContent = "After Swapping"
    document.getElementById("a2").textContent = "Value of A : " + a
    document.getElementById("b2").textContent = "Value of B : " + b
}