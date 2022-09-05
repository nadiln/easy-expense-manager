import axios from 'axios'
import { ApiEndpoints } from "./ApiConstants";

export default function Api(
    URL,
    method,
    data
){

    let options;
    options = {
        headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Content-Language": "en",
                    "X-AppApiToken": "KEY_iF_WE_HAVE",
                    "X-AppType": "docs",

        },
    }
    

 

        const axiosInstance = axios.create({
            baseURL: ApiEndpoints.BASE_URL+URL,
            method: method,
            timeout: 1000 * 60,
            data: JSON.stringify(data),
            params: data,
            body:data,
            ...options,

        });

        console.log('REQUEST URL :'+ApiEndpoints.BASE_URL+URL);
        console.log('REQUEST DATA :'+ JSON.stringify(data));

         return axiosInstance;

       
    

}