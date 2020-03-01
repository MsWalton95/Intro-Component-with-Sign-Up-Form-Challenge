//$('.info input').css('border', '1px solid red');
var error = $('.error');
var errorMsg = $('.info p');
var button = $('.btn');

error.hide();
errorMsg.hide();

button.click(function () {
    //First Name
    let fname = $('#fname');
    let fname_error = $('#firstname .error');
    let fname_msg = $('#firstname .error-msg');

    if (fname.val() === '') {
        fname_error.show();
        fname_msg.show().text('First Name cannot be empty').removeClass('success-msg');
        fname.css('border', '1px solid red');
    } else {
        fname_error.hide();
        fname_msg.show().text('Success!').addClass('success-msg');
        fname.css('border', '1px solid lightgreen');
    }


    //Last Name
    let lname = $('#lname');
    let lname_error = $('#lastname .error');
    let lname_msg = $('#lastname .error-msg');

    if (lname.val() === '') {
        lname_error.show();
        lname_msg.show().text('Last Name cannot be empty').removeClass('success-msg');
        lname.css('border', '1px solid red');
    } else {
        lname_error.hide();
        lname_msg.show().text('Success!').addClass('success-msg');
        lname.css('border', '1px solid lightgreen');
    }


    //Email
    let email = $('#email');
    let email_error = $('#e-mail .error');
    let email_msg = $('#e-mail .error-msg');

    if (email.val().includes('@') && email.val().includes('.com')) {
        email_error.hide();
        email_msg.show().text('Success!').addClass('success-msg');;
        email.css('border', '1px solid lightgreen');
    } else {
        email_error.show();
        email_msg.show().text('Looks like this is not an email').removeClass('success-msg');
        email.css('border', '1px solid red');
    }


    //Password
    let psw = $('#psw');
    let psw_error = $('#password .error');
    let psw_msg = $('#password .error-msg');

    if (psw.val() === '') {
        psw_error.show();
        psw_msg.show().text('Password cannot be empty').removeClass('success-msg');;
        psw.css('border', '1px solid red');
    } else if (psw.val().length < 5) {
        psw_error.show();
        psw_msg.show().text('Password need more than 5 characters').removeClass('success-msg');;
        psw.css('border', '1px solid red');
    } else {
        psw_error.hide();
        psw_msg.show().text('Success!').addClass('success-msg');
        psw.css('border', '1px solid lightgreen');
    }
});