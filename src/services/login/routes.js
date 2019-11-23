import axios from "axios";
import { Subject } from "rxjs";
import defaultRoute from "../defaultRoute";

const currentUserSubject = new Subject();

const currentUser = () => {
  axios.get(`${defaultRoute}api/users/current`).then((response) => {
    currentUserSubject.next(response.data);
  })
  return currentUserSubject;
}

const loginUser = async (username, password) => {
  const login = await axios.post(`${defaultRoute}api/users/signin`, { email: username, password })
  axios.defaults.headers.common = { 'Authorization': login.data.token }
  return currentUser();
}

const createUser = () => {
  const createUserSubject = new Subject();
  axios.post(`${defaultRoute}api/users/signup`).then((reponse) => {
    createUserSubject.next(reponse.data);
  })
  return createUserSubject;
}

export {
  currentUser,
  loginUser,
  createUser,
}