import { Tabs} from 'expo-router';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Main' }} />
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}

