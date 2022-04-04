import { BASE_URL, ADMIN_URL } from "./api"

export const apiCall = async (username, password) => {
  const url = BASE_URL + ADMIN_URL;

  const body = {
    identifier: username,
    password: password,
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })


    const data = await response.json();
    
    return data;

    

  }
  catch(error) {
    console.log(error);
    return null;
  }
}