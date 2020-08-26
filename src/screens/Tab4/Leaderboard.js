import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
} from 'react-native';

export default function Leaderboard() {

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Leaderboard</Text>
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
