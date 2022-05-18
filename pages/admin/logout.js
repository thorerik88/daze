import { useEffect } from "react";
import { remove } from "../../storage/storage"

const Logout = ()=> {
  useEffect(() => {
    remove('token');
    alert('You have been logged out')
    window.location.href = '/';
  })
  return null
}

export default Logout;