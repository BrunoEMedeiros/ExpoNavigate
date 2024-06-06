import { Icon } from 'react-native-elements';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Salas',
          tabBarIcon: ({ color }) => <Icon name="home" type="material" size={22} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Agendamentos',
          tabBarIcon: ({ color }) => <Icon name="list" type="material" size={22} color={color}/>,
        }}
      />
    </Tabs>
  );
}
