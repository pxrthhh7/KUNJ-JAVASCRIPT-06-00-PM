fetch("https://jsonplaceholder.typicode.com/posts/8" , {
    method : "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        title : "PARTH"
    })
})
.then((req) => req.json())
.then((res) => console.log(res))