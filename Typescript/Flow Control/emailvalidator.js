"use strict";
var email = "testtest.com";
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
if (atposition == -1 || dotposition == -1) {
    console.log(`Invalid email id ${email}`);
}
else {
    console.log('Email is valid');
}
