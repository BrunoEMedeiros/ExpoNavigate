import getUser from "@/storage/users/userGet";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface Perfil{
    id: number,
    name: string
}

export default function Profile()
{
    const[user, setUser] = useState<Perfil>()

    useEffect(() => {
        getUser().then((storage)=>{
            //console.log(storage)
            setUser(storage)
        })
    }, []);

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:30}}>
                    Bem vindo {user?.name}
                </Text>
            </View>
        </SafeAreaView>
    )
}