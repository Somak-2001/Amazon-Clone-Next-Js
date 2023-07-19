import axios from "axios";

const instance= axios.create({
    baseURL: '...' //change this to your api url

});

export default instance;