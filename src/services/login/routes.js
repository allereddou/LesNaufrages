import axios from "axios";
import { Subject } from "rxjs";
import defaultRoute from "../defaultRoute";

const currentUser = () => {
  const currentUserSubject = new Subject();
  axios.get(`${defaultRoute}api/users/current`).then((response) => {
    currentUserSubject.next(response.data);
  })
  return currentUserSubject;
}

const loginUser = () => {
  const loginUserSubject = new Subject();
  axios.post(`${defaultRoute}api/users/signin`).then((reponse) => {
    loginUserSubject.next(reponse.data);
  })
  return loginUserSubject;
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