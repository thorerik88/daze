import { useState } from "react";
import { BASE_URL, ADMIN_URL } from "./api"

export const apiCall = async (username, password, callType) => {

  let data = {
    method: callType,
    headers: {
      "identifier": username,
      'password': password,
    }
  }

  try {
    let response = await fetch(BASE_URL + ADMIN_URL);
    let results = await response.json();
    console.log(results)
  } catch(error) {
    console.log(error)
  }
  
}