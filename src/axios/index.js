import axios from 'axios';


export function axiosForLoginAndRegistration(url, data, method) {
  // console.log(JSON.stringify(data)  , 'axios');
    return axios({
      url,
      method,
      data: JSON.stringify(data),
      headers: {
       
        'Content-Type': 'application/json',
      },
    });
  }