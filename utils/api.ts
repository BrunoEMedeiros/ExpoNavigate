
import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : 'http://192.168.1.5:3000'
})