$(document).ready(function () {

    $("#email").blur(function(e){

        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = $("#email").val();
        if(!mailformat.test(email)){
            $("#errorTextEmail").css('display','inline');
        }else {
        $("#errorTextEmail").css('display','none');
    }
    
    });

    $("#signUp").click(function(e){
        let password = $("#pwd").val();
        let confirmPassword = $("#confirmPwd").val();
    
        if(password !== confirmPassword ){
            $("#errorTextPassword").css('display','inline');
        }else {
            $("#errorTextPassword").css('display','none');
            // submitReq(request);
        }
    });

   
    var submitReq = function (request) {
        $.ajax({
            type: "POST",
            url: "/bakend/something",
            headers:
            { "Accept": "application/json"},
            data: JSON.stringify(request),
            contentType: "application/json",
            success: function (data) {
                    //do something
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    
});