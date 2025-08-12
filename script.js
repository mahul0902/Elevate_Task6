var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.style.color = 'red';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        nameError.style.color = 'red';
        return false;
    }
    nameError.innerHTML = 'valid';
    nameError.style.color = 'seagreen';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        phoneError.style.color = 'red';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        phoneError.style.color = 'red';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        phoneError.style.color = 'red';
        return false;
    }

    phoneError.innerHTML = 'valid';
    phoneError.style.color = 'seagreen';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        emailError.style.color = 'red';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid';
        emailError.style.color = 'red';
        return false;
    }

    emailError.innerHTML = 'valid';
    emailError.style.color = 'seagreen';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        messageError.style.color = 'red';
        return false;
    }

    messageError.innerHTML = 'valid';
    messageError.style.color = 'seagreen';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none'},3000);
        return false;
    }
}