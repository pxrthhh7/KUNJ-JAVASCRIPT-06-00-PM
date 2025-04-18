window.onload = GnrtImg;

function GnrtImg() {
    let PrintImage = document.getElementById("printImg")

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(d => {

            console.log(d)
            PrintImage.setAttribute("src", d.message)
        })
}