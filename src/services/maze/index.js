import axios from "axios";

const defaultRoute = "labyrinth-api.herokuapp.com/"

const beginner = () => {
  return axios.get(`${defaultRoute}/maze/beginner`)
}

const advanced = () => {
  return axios.get(`${defaultRoute}/maze/beginner`)
}

export {
  beginner,
  advanced,
}