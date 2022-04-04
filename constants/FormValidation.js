export const FormValidation = (value, type) => {
  let regEx = '';
  
  if (type === 'string') {
    regEx = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
  } else if (type === 'password') {
    regEx = /^[A-Za-z]\w{7,14}$/;
  }

  let validate = false;

  if (value.match(regEx)) {
    validate = true
  }
  return validate
}