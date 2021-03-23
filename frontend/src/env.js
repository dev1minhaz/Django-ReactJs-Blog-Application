export const domain = "http://127.0.0.1:8000"
const token = window.localStorage.getItem("token");

export const header = {
    Authorization: `token ${token}`
}
// import Cookies from 'js-cookie';
// const csrftoken = Cookies.get('csrftoken')
// export const header2 = {
//     'X-CSRFToken': csrftoken,
// }