import axios from 'axios';
export default axios.create({
    // baseURL:'https://temp-app-windowshop.herokuapp.com/'
    baseURL:"http://localhost:8080/"
});

export const WithTokenApi = axios.create({
    // baseURL:'https://temp-app-windowshop.herokuapp.com/',
    baseURL:"http://localhost:8080/",
     headers: {"Authorization" : "Bearer "+localStorage.getItem('token')+"" } 
});