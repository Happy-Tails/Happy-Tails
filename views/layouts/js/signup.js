$(document).ready(function(){
    $(document).on("click","#submit-signup",addLogin);

    var addLogin = function(){
        var cred = {
            email: $("#username").val().trim(),
            password: $("#password").val().trim(),
            pupName:$("#pupsName").val().trim(),
            firstName:$("#firstName").val().trim(),
            lastName:$("#lastName").val().trim()
        };
        $.ajax({
            url: "/api/login",
            method: "PUT",
            data:cred
        }).then(function(){
            console.log("successful")
        })
    }
})