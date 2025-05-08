let ProductPage = document.querySelector(".productPage")

fetchItem("All")

function filter() {
    let category = document.getElementById("category").value

    fetchItem(category)
}


async function fetchItem(category) {
    
    ProductPage.innerHTML = "";

    await fetch("https://fakestoreapi.com/products")
        .then(req => req.json())
        .then(res => {

            res.forEach(element => {
                if (category == 'All' || element.category == category) {
                    let card = document.createElement("div")
                    card.setAttribute("class", "card w-[250px] h-[350px] flex flex-col")
                    let cardUP = document.createElement("div")
                    cardUP.setAttribute("class", "cardUP w-full h-[80%] flex justify-center items-center")
                    let img = document.createElement("img")
                    img.setAttribute("class", "w-[70%] h-[70%]")
                    img.setAttribute("src", element.image)
                    let cardDown = document.createElement("div")
                    cardDown.setAttribute("class", "cardDown h-[20%] border-t-2 border-[#3d869e] flex flex-col items-center justify-center gap-[1px]")
                    let title = document.createElement("span")
                    title.setAttribute("class","text-center")
                    title.innerText = element.title.split(" ")[0]
                    let price = document.createElement("p")
                    price.setAttribute("class" , "text-[13px] text-[gray]")
                    price.innerText = "$" + element.price

                    ProductPage.appendChild(card)
                    card.appendChild(cardUP)
                    cardUP.appendChild(img)
                    card.appendChild(cardDown)
                    cardDown.appendChild(title)
                    cardDown.appendChild(price)
                }
            });
        })
}
