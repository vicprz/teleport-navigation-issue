import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalProvider } from 'react-native-teleport';


export default function RootLayout() {
  return (
    <PortalProvider>
        <SafeAreaProvider>
            <Stack />
        </SafeAreaProvider>
    </PortalProvider>
  );
}
