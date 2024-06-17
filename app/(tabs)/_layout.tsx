import { Tabs } from "expo-router";
import { useEffect } from "react";
import { Icon } from "react-native-elements";

export default function TabsNavigation()
{
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: '#D62828', headerShown: false}}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Salas',
                    tabBarIcon: ({ color }) => 
                    <Icon 
                        name="home" 
                        type="material"
                        size={30}
                        color={color}
                    />
                }}
            />
             <Tabs.Screen 
                name="meusAgendamentos"
                options={{
                    title: 'Agendamentos',
                    tabBarIcon: ({ color }) => 
                    <Icon 
                        name="list" 
                        type="material"
                        size={30}
                        color={color}
                    />
                }}
            />
             <Tabs.Screen 
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => 
                    <Icon 
                        name="person" 
                        type="material"
                        size={30}
                        color={color}
                    />
                
                }}
            />
        </Tabs>
    )
}