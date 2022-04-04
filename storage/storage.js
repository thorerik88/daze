export const save = (key, value) => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export const load = (key)=> {
  try {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  } catch (error) {
    console.log(error)
    return null
  }
}

export const logOut = () => {
    localStorage.remove('token');
}

export const remove = (key) => {
  localStorage.removeItem(key);
}