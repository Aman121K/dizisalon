import {
    validateEmailId,
    validateName,
    validateUserName,
    validMobileNumber,
  } from './CommonFunction';
  import {Messages} from './Messages.js';
  
  export const ValidationPoints = {
    emailTextLimit: 60,
    userNameEmailMinLimit: 3,
    userNameMaxLimit: 30,
    LastNameLimit: 30,
    FirstNameLimit: 30,
    passwordMinLimit: 30,
    PhoneNumber: 14,
    UserNameMaxLimit: 30,
    fullNameLimit: 60,
    longTextLimit: 400,
    linkTextLimit: 60,
    DOB_MIN_YEAR: 100,
    DOB_MAX_YEAR: 18,
    BIO_MAX_CHAR: 500,
    BIO_MIN_CHAR: 50,
  };
  
  export const emailValidation = value => {
    if (!validateEmailId(value)) {
      return {Status: false, errorMsg: Messages.INVALID_EMAIL};
    }
    return {Status: true, errorMsg: ''};
  };
  export const passwordValidate = value => {
    if (value === '' || value.length > ValidationPoints.passwordMinLimit) {
      return {Status: false, errorMsg: Messages.INVALID_PASSWORD};
    }
    return {Status: true, errorMsg: ''};
  };
  
  export const nameValidation = () => {
    return {Status: true, errorMsg: ''};
  };
  