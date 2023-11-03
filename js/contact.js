// -----------------form validation script-----------------

var FirstName = document.getElementById('first_name')
var LastName = document.getElementById('last_name')
var email = document.getElementById('email')
var subject = document.getElementById('subject')
var message = document.getElementById('message')

var FirstNameInputHelp = document.getElementById('FirstNameInputHelp')
var LastNameInputHelp = document.getElementById('LastNameInputHelp')
var EmailInputHelp = document.getElementById('EmailInputHelp')
var SubjectInputHelp = document.getElementById('SubjectInputHelp')
var MessageInputHelp = document.getElementById('MessageInputHelp')


var form = document.getElementById('form');


form.addEventListener('submit', e => { 
  e.preventDefault();
  const NameCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const cinCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const phoneNumCheck = /^.{1,499}$/;
  if(NameCheck.test(FirstName.value) && NameCheck.test(LastName.value) && EmailCheck.test(email.value) && cinCheck.test(subject.value) && phoneNumCheck.test(message.value)){
    form.submit();
  }
})


FirstName.addEventListener('input', function(e) {
  const NameCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  var currentValue = e.target.value;
  var valid = NameCheck.test(currentValue);
  if(!valid){
    FirstNameInputHelp.style.display = 'block'
    FirstName.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    FirstNameInputHelp.style.display = 'none'
    FirstName.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

LastName.addEventListener('input', function(e) {
  const NameCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  var currentValue = e.target.value;
  var valid = NameCheck.test(currentValue);
  if(!valid){
    LastNameInputHelp.style.display = 'block'
    LastName.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    LastNameInputHelp.style.display = 'none'
    LastName.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

// email error message 

email.addEventListener('input', function(e) {
  const EmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var currentValue = e.target.value;
  var valid = EmailCheck.test(currentValue);

  if(!valid){
    EmailInputHelp.style.display = 'block'
    email.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    EmailInputHelp.style.display = 'none'
    email.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
 
  }
})


// subject error message 

subject.addEventListener('input', function(e) {
  const cinCheck = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  var currentValue = e.target.value;
  var valid = cinCheck.test(currentValue);

  if(!valid){
    SubjectInputHelp.style.display = 'block'
    subject.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    SubjectInputHelp.style.display = 'none'
    subject.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})


// message error message 

message.addEventListener('input', function(e) {
  const phoneNumCheck = /^.{1,499}$/;
  var currentValue = e.target.value;
  var valid = phoneNumCheck.test(currentValue);

  if(!valid){
    MessageInputHelp.style.display = 'block'
    message.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    MessageInputHelp.style.display = 'none'
    message.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  } 
})