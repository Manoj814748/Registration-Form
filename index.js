function validateForm(event) {
    event.preventDefault();  // Prevents the default form submission

    var returnval = true;
    clearErrors();

    // Perform validation and if validation fails, set the value of returnval to false
    var firstName = document.forms['myForm']["fname"].value;
    var lastName = document.forms['myForm']["lname"].value;

    if (firstName.length < 5 || lastName.length < 5) {
        seterror("firstname", "*Name should be at least 5 characters long");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be at least 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    // If returnval is still true, the form is valid, and you can submit it
    if (returnval) {
        document.forms['myForm'].submit();
    }
}
