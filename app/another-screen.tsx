import { StyleSheet, Text, View } from 'react-native';

export default function AnotherScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text>This is just another screen</Text>
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
});
