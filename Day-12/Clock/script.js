let print1 = document.getElementById("print1")
let print2 = document.getElementById("print2")
let print3 = document.getElementById("print3")

let now = new Date()

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

setInterval(() => {
    if (seconds < 60) {
        seconds++
        if (hours <= 9) {
            print1.innerText = "0" + hours
        }
        else {
            print1.innerText = hours
        }

        if (minutes <= 9) {
            print2.innerText = "0" + minutes;
        }
        else {
            print2.innerText = minutes;
        }

        if (seconds <= 9) {
            print3.innerText = "0" + seconds;
        }
        else {
            print3.innerText = seconds;
        }
    }
    else if (minutes < 60) // 59 < 60
    {
        minutes++
        seconds = 1;
        if (hours <= 9) {
            print1.innerText = "0" + hours
        }
        else {
            print1.innerText = hours
        }

        if (minutes <= 9) {
            print2.innerText = "0" + minutes;
        }
        else {
            print2.innerText = minutes;
        }

        if (seconds <= 9) {
            print3.innerText = "0" + seconds;
        }
        else {
            print3.innerText = seconds;
        }
    }
    else if (hours < 24) // 23
    {
        hours++
        minutes = 0

        if (hours <= 9) {
            print1.innerText = "0" + hours
        }
        else {
            print1.innerText = hours
        }

        if (minutes <= 9) {
            print2.innerText = "0" + minutes;
        }
        else {
            print2.innerText = minutes;
        }

        if (seconds <= 9) {
            print3.innerText = "0" + seconds;
        }
        else {
            print3.innerText = seconds;
        }

    }
    else {
        hours = 0
        minutes = 0
        seconds = 0
    }

}, 1000);