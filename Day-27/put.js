fetch("https://jsonplaceholder.typicode.com/posts/5" , {
    method : "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        userId : "2",
        id : "6",
        body : "Miles to go before i sleep....",
        title : "PH",
    })
})
.then((req) => req.json())
.then((res) => console.log(res))
