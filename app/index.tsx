import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Portal, PortalHost } from 'react-native-teleport';

export default function App() {
  const router = useRouter();
  const [shouldBeTeleported, setTeleported] = useState(false);
  console.log('shouldBeTeleported', shouldBeTeleported);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text>Portal</Text>
        <View style={styles.outerSquare}>
          <Portal hostName={shouldBeTeleported ? "myPortal" : undefined} style={StyleSheet.absoluteFillObject}>
            <View style={styles.innerSquare} />
          </Portal>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text>PortalHost</Text>
        <View style={styles.outerSquare}>
          <PortalHost name="myPortal" style={StyleSheet.absoluteFillObject} />
        </View>
      </View>
      <Button title="Teleport" onPress={() => { setTeleported(state => !state) }} />
      <Button title="Navigate to another screen" onPress={() => { router.push('/another-screen') }} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  subContainer: {
    alignItems: 'center',
  },
  outerSquare: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  innerSquare: {
    flex: 1,
    backgroundColor: 'red',
  },
});
