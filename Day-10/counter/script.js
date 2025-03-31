let counter = 0

document.getElementById("count").textContent = counter

function add()
{
    counter = counter + 1
    document.getElementById("count").textContent = counter
}

function reset()
{
    counter = 0
    document.getElementById("count").textContent = counter
}

function remove()
{
    if(counter > 0)
    {
        counter = counter - 1
        document.getElementById("count").textContent = counter
    }
}

