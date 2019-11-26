import axios from 'axios';
import * as Config from './../constants/Config';

export default function callAPI(endPoint, method = 'GET', body) {
      return axios({
            method: method,
            url: `${Config.API_URL}/${endPoint}`,
            data: body
      })
            .catch((error) => {
                  console.log(error);
            });
}