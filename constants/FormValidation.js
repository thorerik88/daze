export const FormValidation = (value, type) => {
  let regEx = '';
  
  console.log(type)
  if (type === 'string') {
    regEx = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
  } else if (type === 'password') {
    regEx = /^[A-Za-z]\w{7,14}$/;
  }

  if (value.match(regEx)) {
    return true
  } else {
    return false
  }
}