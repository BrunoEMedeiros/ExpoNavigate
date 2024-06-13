import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_COLLECTION } from '../storageConfig'

export default async function userCreate(id: string, name: string){
    try {
        //console.log(id, name)
        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify({id, name}))
    } catch (error) {
        throw(error)
    }
}