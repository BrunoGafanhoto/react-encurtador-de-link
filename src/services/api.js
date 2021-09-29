import axios from 'axios'

//key: 47734e36a6d20425e93c7b82e34db2e1575b9f66
// base url : https://api-ssl.bitly.com/v4/
export const key = '47734e36a6d20425e93c7b82e34db2e1575b9f66';

const api = axios.create({
     baseURL: 'https://api-ssl.bitly.com/v4',
     headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${key}`
     }
})

export default api;