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

function checkEmail(input){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value)){
    showSuccess(input)
  }
  else{
    showError(input,`The email is not valid`)
  }
  return re.test(email);
}

function checkRequired(inputArr){
    inputArr.forEach(function(item){
        if(item.value.trim() === ''){
            showError(item,`${getFieldData(item)} is required`)
        }
        else{
            showSuccess(item);
        }
    } )
}

function checkLength(input,min, max){
    console.log(input.value, input.value.trim().length)
    if(input.value.trim().length < min){
        showError(input,`${getFieldData(input)} must be least ${min} characters`)
    } else if (input.value.trim().length > max){
        showError(input,`${getFieldData(input)} must bu less than ${max} characters`)
    } else{
        showSuccess(input)
    }
}

function getFieldData(item){
    return item.getAttribute('data-name').charAt(0).toUpperCase() + item.getAttribute('data-name').slice(1)
}

function checkPassword(input, input2)
{
    console.log('enter checkPassword', input.value,input2.value)
    if(input.value !== input2.value)
    {
        showError(input2,`Password dont math`)
    }
    else
    {
        showSuccess(input2)
    }
}

objForm.addEventListener('submit',function (e){
    e.preventDefault();

    checkRequired([objUserName, objEmail, objPassword, objPassword2])
    checkLength(objUserName,3,15)
    checkLength(objEmail,6,30)
    checkEmail(objEmail)
    checkPassword(objPassword,objPassword2)
    // if(objUserName.value === ''){
    //     showError(objUserName,"Username is required")
    // }
    // else{
    //     showSuccess(objUserName);
    // }

    // if(objEmail.value === ''){
    //     showError(objEmail,"Email is required")
    // }else if (!isValidEmail(objEmail.value)){
    //     showError(objEmail,"Email is not correct")
    // }
    // else{
    //     showSuccess(objEmail);
    // }

    // if(objPassword.value === ''){
    //     showError(objPassword,"Password is required")
    // }
    // else{
    //     showSuccess(objPassword);
    // }

    // if(objPassword2.value === ''){
    //     showError(objPassword2,"Password confirm is required")
    // }
    // else{
    //     showSuccess(objPassword2);
    // }
})

