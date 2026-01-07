import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff4d00',
        headerStyle: {
            backgroundColor: '#25292e',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#25292e',
          },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="logbook" options={{ title: 'Log Book' }} />
    </Tabs>
  );
}
