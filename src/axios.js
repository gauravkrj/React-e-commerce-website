import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/deveen-shopping-app/us-central1/api' //api (cloud function ) url
});

export default instance;

