function submit() {
    let CityName = document.getElementById("inpt").value;
    let day = document.getElementById("day")
    let MmYy = document.getElementById("MmYy")
    let condition = document.getElementById("condition")
    let temp = document.getElementById("temp")
    let region = document.getElementById("region")
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = today.toLocaleDateString("en-US", { month: "long" });
    const year = today.getFullYear();


    fetch(`http://api.weatherapi.com/v1/current.json?key=5d37a305e3a048f59f5103840252104&q=${CityName}&aqi=no`)
        .then((r) => r.json())
        .then((d) => {
            console.log(d)
            console.log(dayOfWeek)
            temp.innerText = Math.trunc(d.current.temp_c) + "°C";
            region.innerText = d.location.region
            condition.innerText = d.current.condition.text
            day.innerText = dayOfWeek
            MmYy.innerText = monthName + " " +year
        })
}