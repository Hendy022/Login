let signUpName = document.getElementById("signUpName");
let signUpMail = document.getElementById("signUpMail");
let signUpPass = document.getElementById("signUpPass");
let signUpUser = document.getElementById("signUpUser");
let emailInvalid =document.getElementById("invalid");
let emailRequired = document.getElementById("required");
let emailSuccess = document.getElementById("success");
let login = document.getElementById("login");
let mailLogin = document.getElementById("mailLogin");
let passLogin = document.getElementById("passLogin");
let inCorrect = document.getElementById("inCorrect");
let logOut = document.getElementById("logOut");
let homeName = document.getElementById("homeName");
let userContainer = [];

if (localStorage.getItem('myUsers') != null) 
{
    userContainer =JSON.parse( localStorage.getItem('myUsers'));
    
}


function isEmpty() {
    if (signUpName.value == "" || signUpMail.value == "" || signUpPass.value == "") {
        return false;
    } else {
        return true;
    }
    
}
function isEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail.toLowerCase() == signUpMail.value.toLowerCase()) {
            return false;
        }
    }
    
}

function addUser() 
{
    if (isEmpty()==false) {
        emailRequired.classList.remove('d-none');
        emailInvalid.classList.add('d-none');

        return false;
    }
    
    
    let user =
    {
        name:signUpName.value,
        mail:signUpMail.value,
        pass:signUpPass.value,
    }
    if (userContainer.length==0) 
    {    
    userContainer.push(user);
    localStorage.setItem('myUsers',JSON.stringify(userContainer));
    emailSuccess.classList.remove('d-none');
    emailInvalid.classList.add('d-none');
    emailRequired.classList.add('d-none');


    return true;
    }
    if (isEmailExist()==false) 
    {
        emailInvalid.classList.remove('d-none');
        emailRequired.classList.add('d-none');
        emailSuccess.classList.add('d-none');

    } else 
    {
        userContainer.push(user);
        localStorage.setItem('myUsers',JSON.stringify(userContainer));
        emailSuccess.classList.remove('d-none');
        emailInvalid.classList.add('d-none');
        emailRequired.classList.add('d-none');
    }
        
}

function isLoginEmpty() {
    if (mailLogin.value == "" || passLogin.value == "" ) {
        return false;
    } else {
        return true;
    }
    
}
function isLoginExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail.toLowerCase() == mailLogin.value.toLowerCase() && userContainer[i].pass.toLowerCase() == passLogin.value.toLowerCase() ) {
            return true;
        }
    }
}

function getHome() {
    if (isLoginEmpty()==false) {
        emailRequired.classList.remove('d-none');
        inCorrect.classList.add("d-none")
        return false;
    }
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail.toLowerCase() == mailLogin.value.toLowerCase() && userContainer[i].pass.toLowerCase() == passLogin.value.toLowerCase() ) {
            window.location.href = "file:///D:/Web/hendy/5-%20Login/home.html";
            document.getElementById("homeName").innerHTML=`Welcome${userContainer[i].name}`
        }else
        {
            
        emailRequired.classList.add('d-none');
        inCorrect.classList.remove("d-none")
        }
    }
    
    
}

function getLogin() 
{
    window.location.href = "file:///D:/Web/hendy/5-%20Login/index.html";

}