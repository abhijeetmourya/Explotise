import axios from "axios";

const instance = axios.create({
    baseURL: "https://explotise-backend.herokuapp.com/"
})

export default instance;