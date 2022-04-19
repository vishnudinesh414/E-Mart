// onclick="validation(event)"
function validation(event){
    
    var emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var nameRe = /^[A-Za-z\s]+$/;
    var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    var name = document.confirmation.namen.value;
    var email = document.confirmation.emailn.value;
    var phone = document.confirmation.phonen.value;
    var pass1 = document.confirmation.passwn.value;
    var pass2 = document.confirmation.conpasswn.value;
    
    var error = document.getElementById("error");
    var errorMsgs = '';
    if(name == "" && email == "" && phone == "" && pass1 == "" && pass2 == "" ){
        error.innerHTML = "<span style = 'color:red;font-weight:400;'>ENTER THE DETAILS</span>";
		event.preventDefault();
        return false;
    }
    
    if(name == "" || !(nameRe.test(name))){
        errorMsgs+="<br/>ENTER THE VALID NAME!!!";

    }

    if(email == "" || !(emailRe.test(email))){
        errorMsgs+="<br/>ENTER THE VALID MAIL!!!";

    }
    
    if(phone == "" || !(phoneRe.test(phone))){
        errorMsgs+="<br/>ENTER THE VALID PHONE NUMBER!!!";
    }
    
    if((pass1 == "" || pass1.length<8 ) || (pass2 == "" || pass2.length<8 )){
        
        errorMsgs+="<br/>ENTER THE VALID PASSWORD!!!";
    }
    else{
        if(pass1 != pass2){
            errorMsgs+="<br/>PASSWORD DOES NOT MATCH!!!";
        }

    }
    if(errorMsgs != ''){
        error.innerHTML= errorMsgs;
		event.preventDefault();
        return false;
    }

	
}

$(".modal").on("hidden.bs.modal", function(){
    $(".modal-body1").html("");
});

function confirm(event1){
    event1.preventDefault();
    var name = document.submission.name.value;
    var email = document.submission.email.value;
    var phone = document.submission.num.value;
    var pass1 = document.submission.passn.value;
    var pass2 = document.submission.conpassn.value;


    document.confirmation.namen.value = name;
    document.confirmation.emailn.value = email;
    document.confirmation.phonen.value = phone;
    document.confirmation.passwn.value = pass1;
    document.confirmation.conpasswn.value = pass2;
  
}