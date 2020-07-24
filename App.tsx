import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {

  const checkUpdate = useCallback(async () => {
     {
      const { isAvailable, } = await Updates.checkForUpdateAsync()

      if (isAvailable) {
        await Updates.fetchUpdateAsync()

        await Updates.reloadAsync()
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Updated!</Text>
      <Button
        onPress={checkUpdate}
        title="Update"
        color="#841584"
        accessibilityLabel="Update app button"
      />    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
