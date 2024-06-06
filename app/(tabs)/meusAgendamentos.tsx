import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home()
{
    return(
        <SafeAreaView>
            <View>
                <Text>Meus agendamentos</Text>
            </View>
        </SafeAreaView>
    )
}