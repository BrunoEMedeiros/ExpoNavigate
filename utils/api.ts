
import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : 'http://10.132.3.8:3000'
})