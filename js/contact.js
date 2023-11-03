// --------------------------------------------------form validation script--------------------------------------------------

// variables

var form = document.getElementById('form');
var FirstName = document.getElementById('first_name')
var LastName = document.getElementById('last_name')
var email = document.getElementById('email')
var subject = document.getElementById('subject')
var message = document.getElementById('message')

// error messages variables

var FirstNameInputHelp = document.getElementById('FirstNameInputHelp')
var LastNameInputHelp = document.getElementById('LastNameInputHelp')
var EmailInputHelp = document.getElementById('EmailInputHelp')
var SubjectInputHelp = document.getElementById('SubjectInputHelp')
var MessageInputHelp = document.getElementById('MessageInputHelp')

// Regex values

const NameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SubjectRegex = /^.{1,20}$/;
const MessageRegex = /^.{1,499}$/;

// Submit only after all values are correct function

form.addEventListener('submit', e => { 
  e.preventDefault();
  
  if(NameRegex.test(FirstName.value) && NameRegex.test(LastName.value) && EmailRegex.test(email.value) && SubjectRegex.test(subject.value) && MessageRegex.test(message.value)){
    form.submit();
  }
})

// First Name Error Check

FirstName.addEventListener('input', function(e) { 
  var currentValue = e.target.value;
  var valid = NameRegex.test(currentValue);

  if(!valid){
    FirstNameInputHelp.style.display = 'block'
    FirstName.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    FirstNameInputHelp.style.display = 'none'
    FirstName.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

// Last Name Error Check

LastName.addEventListener('input', function(e) {
  var currentValue = e.target.value;
  var valid = NameRegex.test(currentValue);

  if(!valid){
    LastNameInputHelp.style.display = 'block'
    LastName.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    LastNameInputHelp.style.display = 'none'
    LastName.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

// Email Error Check

email.addEventListener('input', function(e) {
  var currentValue = e.target.value;
  var valid = EmailRegex.test(currentValue);

  if(!valid){
    EmailInputHelp.style.display = 'block'
    email.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    EmailInputHelp.style.display = 'none'
    email.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

// Subject Error Check

subject.addEventListener('input', function(e) {
  var currentValue = e.target.value;
  var valid = SubjectRegex.test(currentValue);

  if(!valid){
    SubjectInputHelp.style.display = 'block'
    subject.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    SubjectInputHelp.style.display = 'none'
    subject.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  }
})

// Message Error Check

message.addEventListener('input', function(e) {
  var currentValue = e.target.value;
  var valid = MessageRegex.test(currentValue);

  if(!valid){
    MessageInputHelp.style.display = 'block'
    message.className = "form-control mx-2 border-danger border-2 border-bottom border-0"
  } else {
    MessageInputHelp.style.display = 'none'
    message.className = "form-control mx-2 border-primary border-2 border-bottom border-0"
  } 
})