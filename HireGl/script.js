(function($) {
    var error = false;
    

    $("#btn").click(function(event){
        var userName = $("#userName").val();
        if(userName.trim().length<2){
            $("#erruserName").html("Invalid name");
            error = true;
        }
        else {
            $("#erruserName").html("");
        }

        var userPassword = $("#userPassword").val();
        if(userPassword.trim().length<2){
            $("#userPassword").html("Invalid password");
            error = true;
        }
        else {
            $("#erruserName").html("");
        }

        $("#userName").keyup(function(){
            var userName = $("#userName").val();
            if(userName.trim().length>1){
                $("#erruserName").html("");
            }
        });
        $("#userPassword").keyup(function(){
            var userPassword = $("#userPassword").val();
            if(userPassword.trim().length>1){
                $("#erruserPassword").html("");
            }

});

        //ajax request na server 
$.ajax({
utl: 'http://akademiasovy.ddns.net:8081/api/auth/login',
type: 'Post',
contentType: 'application/json',
data: JSON.stringify (
                { "userName":userNameValue,
                "password": userPasswordValue}),
                success: function(data){
                window.location.href='main.html';
                },
                error: function(){
                }



});
        