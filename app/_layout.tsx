import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalProvider } from 'react-native-teleport';


export default function RootLayout() {
  return (
    <PortalProvider>
        <SafeAreaProvider>
            <Stack />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    </PortalProvider>
  );
}
