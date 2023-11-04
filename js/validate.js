//check if document is ready
let stateCheck = setInterval(() => {
    if(document.readyState ==='complete'){
        pageInit();
        clearInterval(stateCheck);
    }
}, 100);

//add submit event listener to form
function pageInit(){
 document.querySelector('#frmRegistration').addEventListener('submit', validateForm);
}

function validateForm(e){
    //prevent normal form submission
    e.preventDefault();
    //remove previous validation messages if any
    document.querySelectorAll('.msg').forEach((msg) => {
        msg.parentNode.removeChild(msg);
    });
    //initialize valid variable as true
    let valid = true;
    //grap fields to validate
    let fields = document.querySelectorAll('input[required], select[required], input[maxlength], input[pattern]');
    //loop around fields to validate
    fields.forEach((field) => {
        if(field.checkValidity()){
            //add valid class if field is valid
            field.className = 'valid';
            //console.log(field.validity);
        }else{
            //assign valid variable with false
            valid = false;
            //add invalid class if field is valid
            field.className = 'invalid';
            //console.log(field.validity);
            //get default message or title attribute if any
            let message = field.title ? field.title : field.validationMessage;
            //add validation message in the Dom
            field.parentNode.insertAdjacentHTML('beforeend', `<span class="msg error-msg">${message}</span>`);
          
        }//end if else checkValidity()
    });//end forEach()
    //submit form if valid variable is true (i.e. if no fields are invalid)
    if(valid){
        e.target.submit();
    }
}