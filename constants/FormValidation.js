export const FormValidation = (value, type) => {
  let regEx = '';
  
  if (type === 'string') {
    regEx = /^(?!\s*$).+/;
  } else if (type === 'password') {
    regEx = /^[A-Za-z]\w{7,14}$/;
  } else if (type === 'email') {
    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  } else if (type === 'number') {
    regEx = /\d{7}/;
  }

  if (value.match(regEx)) {
    return true
  } else {
    return false
  }
}