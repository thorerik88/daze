import { ADMIN_URL } from "./api"

export const LoginCall = async (email, password) => {
  const url = ADMIN_URL + process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  console.log(email, password)
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })


    const data = await response.json();
    console.log(data)
    return data;

    

  }
  catch(error) {
    console.log(error);
    return null;
  }
}