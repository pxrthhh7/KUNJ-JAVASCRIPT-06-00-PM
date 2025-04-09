let left = document.getElementById("LeftBtn")
let right = document.getElementById("RightBtn")
let slider = document.querySelector(".slider")
let slideNumber = 1
let images = document.querySelectorAll(".images")
let lengthImage = images.length


left.addEventListener('click',() =>{
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber-2) * 600}px)`
        slideNumber--
    }
    else{
        slider.style.transform = `translateX(-${(lengthImage-1) * 600}px)`
        slideNumber = lengthImage;
    }
})


right.addEventListener('click',() =>{
    if (slideNumber < lengthImage) {
        slider.style.transform = `translateX(-${slideNumber * 600}px)`
        slideNumber++
    }
    else{
        slider.style.transform = `translateX(0px)`
        slideNumber = 1;
    }
})