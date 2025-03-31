let print1 = document.getElementById("print1")
let print2 = document.getElementById("print2")
let print3 = document.getElementById("print3")

let now = new Date()

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

console.log(hours,minutes,seconds)

setInterval(() => {
    if (seconds < 60) 
        {
            seconds++   
            console.log(hours,minutes,seconds) 
            print1.innerText = hours
            print2.innerText = minutes;
            print3.innerText = seconds;
        }
        else if (minutes < 60) // 59 < 60
        {
            minutes ++
            seconds = 1;    
            console.log(hours,minutes,seconds) 
            print1.innerText = hours
            print2.innerText = minutes;
            print3.innerText = seconds;
        }
        else if (hours < 24) // 23
        {
            hours++
            minutes = 0    
            console.log(hours,minutes,seconds) 
            print1.innerText = hours
            print2.innerText = minutes;
            print3.innerText = seconds;
        }
        else
        {
            hours = 0
            minutes = 0
            seconds = 0
        } 
            
}, 1000);