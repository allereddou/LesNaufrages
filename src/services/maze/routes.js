import axios from "axios";
import {Subject, Subscription} from "rxjs";

const defaultRoute = "https://labyrinth-api.herokuapp.com/"

const beginner = () => {
  const beginnerSubject = new Subject();
  axios.get(`${defaultRoute}maze/beginner`).then((response) => {
    beginnerSubject.next(response.data);
  })
  return beginnerSubject;
}

const advanced = () => {
  const advancedSubject = new Subject();
  axios.get(`${defaultRoute}maze/advanced`).then((response) => {
    advancedSubject.next(response.data);
  })
  return advancedSubject;
}

export {
  beginner,
  advanced,
}