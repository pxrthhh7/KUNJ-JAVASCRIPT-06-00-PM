let key = "aabe02914090437da897919251cce4d2"

let myform = document.getElementById("myform")
let amountInput = document.getElementById("Amount")
let output = document.getElementById("Output")
let FromCurrency = document.getElementById("FromCurrency")
let ToCurrency = document.getElementById("ToCurrency")
let cnvrtBtn = document.getElementById("cnvrtBtn")


fetch("https://api.currencyfreaks.com/v2.0/currency-symbols")
    .then(req => req.json())
    .then(res => {

        const currencyArray = Object.entries(res.currencySymbols);

        currencyArray.forEach(([code, name]) => {

            let option1 = document.createElement("option")
            option1.setAttribute("value", `${code}`)
            option1.innerText = `${code} : ${name}`
            FromCurrency.appendChild(option1)

            let option2 = document.createElement("option")
            option2.setAttribute("value", `${code}`)
            option2.innerText = `${code} : ${name}`
            ToCurrency.appendChild(option2)

        })
    })


myform.addEventListener('submit', function (e) {
    e.preventDefault()

    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${key}`)
        .then(req => req.json())
        .then(res => {

            let From = FromCurrency.value
            let To = ToCurrency.value
            let amount = +amountInput.value
            
            // FAR = From amount(user selected curreny) rate, based on exachange rate
            // FARperUSD = Price of 1 USD into User Selected Currency
            let FARperUSD = res.rates[From]
            // console.log(FARperUSD)

            // TAR = To amount(user selected curreny) rate, based on exachange rate
            // TARperUSD = Price of 1 USD into User Selected Currency
            let TARperUSD = res.rates[To]
            // console.log(TARperUSD)

            // CONVERT AMOUNT INTO USD BASED ON EXCHANGE RATE
            let amountUSD = amount / FARperUSD // 118.76 = 10000 / 84.1965

            let Finalamount = (amountUSD * TARperUSD).toFixed(2) // 104.99 = 118.76 * 0.88395

            output.innerText = `${amount} ${From} = ${Finalamount} ${To}`
        })

})

