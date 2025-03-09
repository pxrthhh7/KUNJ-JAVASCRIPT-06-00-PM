function submit() 
{
    let P = document.getElementById("P").value
    let T = document.getElementById("T").value
    let RI = document.getElementById("RI").value

    console.log(P)
    console.log(T)
    console.log(RI)

    let SI = (P*T*RI) / 100
    document.getElementById("SI").textContent = "The total payable interest on the loan : " + SI
    
    let FI = +P + +SI
    document.getElementById("FI").textContent = "The total payable amount : " + FI

}