import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-web.firebaseio.com/'
});

export default instance;