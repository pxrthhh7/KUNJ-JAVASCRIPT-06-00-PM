$(document).ready(function () {
    $("#myform").validate({
        rules : {
            Name : {
                required : true,
                minlength: 2,
            },
            Email : {
                required : true,
                minlength: 12,
            }
        },
        messages : {
            Name : {
                required: "Please enter your Name",
                minlength: "Name at least 2 characters",
            },
            Email : {
                required: "Please enter your Email",
                minlength: "Name at least 12 characters",
            }
        },
        submitHandler: function (form) {
            let name = document.getElementById("Name").value;
            let mail = document.getElementById("Email").value;
            
            localStorage.setItem("userName",name)
            localStorage.setItem("userEmail",mail)
            
            window.location.href = "output.html";
        }
        
    })
})
