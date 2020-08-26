import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
} from 'react-native';

export default function Home() {

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#ff1616',
  },
});
