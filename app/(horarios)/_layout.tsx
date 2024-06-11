import { Stack, useLocalSearchParams } from "expo-router";

export default function StackLayout(){

  const params = useLocalSearchParams();
  
    return(
    <Stack>
        <Stack.Screen name="horarios" options={{ title: params.name?.toString()}}/>
    </Stack>
    )
}