import { useEffect } from "react";
import { logOut, remove } from "../../storage/storage"

const Logout = ()=> {
  useEffect(() => {
    remove('token');
    window.location.href = '/';
  })
  return null
}

export default Logout;