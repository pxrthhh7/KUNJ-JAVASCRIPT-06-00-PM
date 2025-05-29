// Sign Up Form
let signup = document.getElementById("signupForm");

if (signup) {
    signup.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;
        let confpass = document.getElementById("confirm").value;

        if (pass !== confpass) {
            alert("Password does not match");
        } else {
            const userdata = {
                name: name,
                email: email,
                password: pass,
                otp: ''
            };

            localStorage.setItem("userData", JSON.stringify(userdata));
            alert("Sign up successful!");
            window.location.href = "login.html";
        }
    });
}

// Log In Form
let login = document.getElementById("loginForm");

if (login) {
    login.addEventListener('submit', function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const storedData = JSON.parse(localStorage.getItem("userData"))

        if (!storedData) {
            alert("No user found. Please sign up first.");
            window.location.href = "signup.html";
        }

        if (email == storedData.email && password == storedData.password) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        }
        else {
            alert("Invalid email or password.");
        }
    });
}

// Forget Form
let forget = document.getElementById("forgetForm")

if (forget) {
    forget.addEventListener('submit', function (e) {

        e.preventDefault()

        let email = document.getElementById("email").value

        const storedData = JSON.parse(localStorage.getItem("userData"))

        if (email == storedData.email) {


            let otp = generateOTP();
            storedData.otp = otp
            localStorage.setItem("userData", JSON.stringify(storedData));

            alert("OTP sent! Your OTP is: " + otp);
            window.location.href = "otp.html";
        }
        else {
            alert("Email Does not exist !")
        }
    })
}

// OTP Form
let otp = document.getElementById("otpForm")

if (otp) {
    otp.addEventListener('submit', function (e) {
        e.preventDefault()

        let inpt1 = document.getElementById("input1").value
        let inpt2 = document.getElementById("input2").value
        let inpt3 = document.getElementById("input3").value
        let inpt4 = document.getElementById("input4").value

        const storedData = JSON.parse(localStorage.getItem("userData"))

        const firstDigit = parseInt(storedData.otp[0]);
        const secondDigit = parseInt(storedData.otp[1]);
        const thirdDigit = parseInt(storedData.otp[2]);
        const forthDigit = parseInt(storedData.otp[3]);

        if (inpt1 == firstDigit && inpt2 == secondDigit && inpt3 == thirdDigit && inpt4 == forthDigit) 
        {
            alert("OTP is confirmed !")
            window.location.href = "reset.html";
        }
        else
        {
            alert("OTP Does not match !")
        }
    })
}

// RESET PASSWORD Form
let reset = document.getElementById("resetForm")

if (reset) {
    reset.addEventListener('submit' , function(e) {
        e.preventDefault()
        
        let newPass = document.getElementById("new-password").value
        let confirmPass = document.getElementById("confirm-password").value

        const storedData = JSON.parse(localStorage.getItem("userData"))

        if (newPass == confirmPass) {
            storedData.password = newPass;
            storedData.otp = ''
            localStorage.setItem("userData", JSON.stringify(storedData));
            alert("Password Successfully changed !")
            window.location.href = "login.html";
        }
        else
        {
            alert("Password Does not match !")
        }
    })
}

// LOG OUT Form
let logout = document.getElementById("logout")

if (logout) {
    logout.addEventListener('click', function () {
        localStorage.removeItem("userData");
        alert("You have been logged out.");
        window.location.href = "login.html";
    })
}

// OTP GENERATOR
function generateOTP() {
    let otp = '';
    for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

