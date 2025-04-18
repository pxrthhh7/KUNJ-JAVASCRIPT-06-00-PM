const storedData = JSON.parse(localStorage.getItem("userData1"));

const values = Object.values(storedData);

let main = document.getElementById("Main")

let attribute = ["Name : ","Email : "]

values.forEach((i , index) => {
    let heading = document.createElement("p")
    let label = document.createTextNode(attribute[index] + " ");
    let info = document.createElement("span")
    info.textContent = i;
    
    main.appendChild(heading)   
    heading.appendChild(label)
    heading.appendChild(info)
});