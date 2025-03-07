function submit(){
    let mark = document.getElementById("mark").value
    console.log(mark)

    let result = document.getElementById("result")

    if (mark >= 0 && mark <= 100) 
    {
        let grad = (mark>=90) ? 'A' : (mark>=80) ? 'B' : (mark>=70) ? 'C' : (mark>=60) ? 'D' : (mark>=50) ? 'E' : 'F';

        result.textContent = "Your Grad is : " + grad
    }
    else
    {
        result.textContent = "Please Enter a Marks Beetween 0 to 100 !"
    }
    
}

