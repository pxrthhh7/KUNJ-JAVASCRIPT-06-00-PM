let box = document.querySelectorAll(".box")
let speed = 200

box.forEach((i) => {
    let target = +i.dataset.target
    // console.log(target)
    let CurrentTarget = target / speed
    // console.log(CurrentTarget)
    let counter = 0

    setInterval(() => {
        if(counter <= target)
            {
                i.innerText = counter
                counter = counter + CurrentTarget
            }
    },5);
});


