$(document).ready(function () {

    let password = '';
    let email = '';

    $("#email").blur(function(e){

        //let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email = $("#email").val();
        /* if(!mailformat.test(email)){
            $("#errorTextEmail").css('display','inline');
        }else {
        $("#errorTextEmail").css('display','none');
    } */
    
    });

    $("#logmein").click(function(e){
        password = $("#pwd").val();
        submitReq(email, password);
        //let confirmPassword = $("#confirmPwd").val();
    
        /* if(password !== confirmPassword ){
            $("#errorTextPassword").css('display','inline');
        }else {
            $("#errorTextPassword").css('display','none');
             submitReq({"mail":email, "pass":password});            
        } */
    });

   
    var submitReq = function (email, pass) {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/getuser/"+email+"/"+pass,
            headers:
            { "Accept": "application/json"},
            data: JSON.stringify(email, pass),
            contentType: "application/json",
            success: function (data) {
                    alert(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    $("#metamask_login").click(function(e){
        
      if(!window.web3) {
        window.alert('Please install MetaMask first.');
        return;
      }
      else if(!web3) {
        // We don't know window.web3 version, so we use our own instance of web3
        // with provider given by window.web3
        web3 = new Web3(window.web3.currentProvider);
      }
      else if(!web3.eth.coinbase) {
        window.alert('Please activate MetaMask first.');
        return;
      }
      else  alert("User logged in");
    });
    
});