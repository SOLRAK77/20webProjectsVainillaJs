const objForm = document.getElementById('form');
const objUserName = document.getElementById('userName');
const objEmail = document.getElementById('email');
const objPassword = document.getElementById('password');
const objPassword2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const objMessage = formControl.querySelector('small')
    objMessage.innerText = message
}

function showSuccess(input)
{
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

objForm.addEventListener('submit',function (e){
    e.preventDefault();

    if(objUserName.value === ''){
        showError(objUserName,"Username is required")
    }
    else{
        showSuccess(objUserName);
    }

    if(objEmail.value === ''){
        showError(objEmail,"Email is required")
    }else if (!isValidEmail(objEmail.value)){
        showError(objEmail,"Email is not correct")
    }
    else{
        showSuccess(objEmail);
    }

    if(objPassword.value === ''){
        showError(objPassword,"Password is required")
    }
    else{
        showSuccess(objPassword);
    }

    if(objPassword2.value === ''){
        showError(objPassword2,"Password confirm is required")
    }
    else{
        showSuccess(objPassword2);
    }
})

