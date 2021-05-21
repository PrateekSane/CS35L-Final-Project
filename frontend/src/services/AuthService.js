import Axios from 'axios';

import { BASE_URL } from './config';

const axios = Axios.create({
	baseURL: BASE_URL,
});

async function login(username, password) {
  try {
    let data = (
      await axios.post('/loginUser', {
        username: username,
        password: password,
    })
    ).data;

    return data;
  } catch(e) {
    console.log(e);
    throw e;
  }
}

async function signup(username, password) {
  console.log('in request')
  try {
    let data = (
      await axios.post('/createUser', {
        username: username,
        password: password,
    })
    ).data;

    return data;
  } catch(e) {
    console.log(e);
    throw e;
  }
}

export default { login, signup };
