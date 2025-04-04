function GenerateOTP() { 
    let box = [0,1,2,3,4,5,6,7,8,9];
    let otp = "";

    for (let i = 0; i < 4; i++) {
        otp += box[Math.floor(Math.random() * 10)]; 
    }

    document.getElementById("otpprint").innerText = otp

}
