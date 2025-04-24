fetch("https://jsonplaceholder.typicode.com/posts/")
.then((req) => req.json())
.then((res) => console.log(res))
