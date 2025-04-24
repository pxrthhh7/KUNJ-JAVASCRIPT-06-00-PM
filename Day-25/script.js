function Movie()
{

    let MovieName = document.getElementById("input").value;
    let Main = document.querySelector(".container")
    Main.innerHTML = " ";


    let key = "45fdb73"
    fetch(`http://www.omdbapi.com/?s=${MovieName}&apikey=${key}`)
    .then((r) => r.json())
    .then((d) => {
        d.Search.forEach(element => {
            console.log(element)

            Main.style.marginBlock = '100px'
            let card = document.createElement("div")
            card.setAttribute("class","card")            
            let img = document.createElement("img")
            img.setAttribute("src" , element.Poster)
            let MName = document.createElement("span")
            MName.innerText = element.Title
            let info = document.createElement("div")
            info.setAttribute("class","info")
            let IDimdb = document.createElement("h6")
            IDimdb.innerText = "IMDb ID : " + element.imdbID
            let year = document.createElement("p")
            year.innerText = element.Year
            
            Main.appendChild(card)
            card.appendChild(img)
            card.appendChild(MName)
            card.appendChild(info)
            info.appendChild(IDimdb)
            info.appendChild(year)  
        });

    })
}