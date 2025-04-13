$(document).ready(function () {
    $("#myform").validate({
      rules: {
        Name: {
          required: true,
          minlength: 2,
        },
        Email: {
          required: true,
          minlength: 12,
        },
        Password: {
          required: true,
          minlength: 8,
          maxlength: 20,
        },
      },
      messages: {
        Name: {
          required: "Please enter your name",
          minlength: "Name at least 2 characters",
        },
        Email: {
          required: "Please enter your Email",
          minlength: "Name at least 12 characters",
        },
        Password: {
          required: "Please enter your password",
          minlength: "Your password must be at least 8 characters long",
          maxlength: "Your password must not exceed 20 characters",
        },
      },
    });
  });