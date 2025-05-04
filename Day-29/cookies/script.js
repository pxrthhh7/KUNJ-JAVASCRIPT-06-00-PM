import Cookies from 'js-cookie';
Cookies.set('username', 'JohnDoe', { expires: 7 }); // expires in 7 days
const username = Cookies.get('username');
console.log(username);
