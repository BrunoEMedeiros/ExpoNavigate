import {Stack} from 'expo-router'

export const unstable_settings = {
    initialRouteName: "(tabs)",
};

export default function StackLayout()
{
    return(
        <Stack initialRouteName='(tabs)'>
            <Stack.Screen name='(tabs)' options={{ headerShown: false}} />
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(user)/cadastro' options={{headerTitle : 'Cadastro'}} />
        </Stack>
    )
}