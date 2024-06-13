import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_COLLECTION } from '../storageConfig'

export default async function getUser() 
{
    try {
        const storage = await AsyncStorage.getItem(USER_COLLECTION)
        const user = storage ? JSON.parse(storage) : ''
        //console.log(user)
        return user
    } catch (error) {
        throw(error)
    }    
}