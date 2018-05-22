$(document).ready(function(){
    
    $("#email").attr("placeholder",sessionStorage.getItem("emailPlaceholder")|| "abcd@domain.net")
    $(document).on("click","#submit-signin",function(){
        
        
        var cred = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };
        
        $.ajax({
            url: "/user/login/"+cred.email+"/"+cred.password,
            type: "GET",
            
        }).then(function(data,err){
            
            if(data){
               console.log("successful,"+data.email+" "+data.password)
               
               localStorage.setItem("email",data.email);
               localStorage.setItem("password",data.password); 
            }
            else{
            console.log("cant find");
               $("#email").empty();
               $("#password").empty();
               sessionStorage.setItem("emailPlaceholder","cannot find email and/or password"); 
            }
        })
    });

    // var checkLogin = function(event){
    //     //event.preventDefault()
    //     var cred = {
    //         email: $("#username").val().trim(),
    //         password: $("#password").val().trim(),
    //     };
    //     $.ajax({
    //         url: "/api/login/",
    //         method: "GET",
            
    //     }).then(function(data){
    //         if(data){
    //            console.log("successful,"+data.email+" "+data.password)
               
    //            localStorage.setItem("email",data.email);
    //            localStorage.setItem("password",data.password); 
    //         }
    //         else{
    //            $("#username").empty();
    //            $("#password").empty();
    //            $("#username").attr("placeholder","email or password not found") 
    //         }
    //     })
    // }
})