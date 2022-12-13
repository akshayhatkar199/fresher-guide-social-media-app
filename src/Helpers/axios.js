import axios from 'axios';
export default axios.create({
    // baseURL:'https://temp-app-windowshop.herokuapp.com/'
    baseURL:"http://localhost:8080/"
});

// const token = JSON.parse(localStorage.getItem('token'));
// export const WithTokenApi = axios.create({
//     // baseURL:'https://temp-app-windowshop.herokuapp.com/',
//     baseURL:"http://localhost:8080/",
//      headers: {"Authorization" : `Bearer ${token}`} 
// });