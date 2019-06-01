import axios from "axios"
import * as Config from "../constants/Config"

export default function callApi(endpoint, method = "GET", body) {
    // localStorage => token
    const token = localStorage.getItem('USER');
    // if(token) {
    //     return axios({
    //         method: method,
    //         headers: {
    //             'x-auth-token': token,
    //         },
    //         url: `${Config.API_URL}/${endpoint}`,
    //         data: body
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }else {
    //     return console.log("Ban chua dang nhap")
    // }

    return axios({
        method: method,
        headers: {
            'x-auth-token': token,
        },
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}