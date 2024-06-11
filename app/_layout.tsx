import {Stack} from 'expo-router'

export default function StackLayout()
{
    return(
        <Stack initialRouteName='(tabs)'>
            <Stack.Screen name='(tabs)' options={{ headerShown: false}} />
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(user)/cadastro' options={{headerTitle : 'Cadastro'}} />
            <Stack.Screen name='(horarios)' options={{ headerShown: false }}/>
        </Stack>
    )
}