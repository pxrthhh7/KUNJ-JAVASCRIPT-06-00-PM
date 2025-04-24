const data = {
    userID: "1",
    id: "101",
    title: "Hp",
    body: "Miles to go before i sleep...."
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body : JSON.stringify(data)
})
.then((req) => req.json())
.then((res) => console.log(res)) ;