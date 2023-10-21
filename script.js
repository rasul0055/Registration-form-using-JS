function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    } 
}

function seterror(id, error) {
    // stes error inside tags of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnVal = true;
    clearErrors();

    // perform validations if it fails, set the value to false 
    var name = document.forms['myForm']["fname"].value;

    if (name.length < 5) {
        seterror("name", "*Length of name is too short!");
        returnVal = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name can't be blank!");
        returnVal = false;
    }

    var email = document.forms['myForm']["femail"].value;

    if (email.length >15) {
        seterror("email", "* Email length is too long!");
        returnVal = false;
    }

    var phone = document.forms['myForm']["fphone"].value;

    if (phone.length !=10) {
        seterror("phone", "*phone number should be of 10 digits!");
        returnVal = false;
    }

    var password = document.forms['myForm']["fpass"].value;

    if (password.length < 6) {

        // Quiz: ceate a logoc to allow only those passsword which contain atleast one special character,one number, one letter
        seterror("pass", "*Password should be of atleast 6 characeter long!");
        returnVal = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;

    if (cpassword != password) {

        // Quiz: ceate a logoc to allow only those passsword which contain atleast one special character,one number, one letter
        seterror("cpass", "*confirm password and password should match!");
        returnVal = false;
    }

    return returnVal;

}