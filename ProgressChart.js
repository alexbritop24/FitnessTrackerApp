import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressChart = () => {
  // Placeholder for a progress chart (e.g., you can later implement with libraries like Victory or React Native Charts)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Chart</Text>
      <Text>This is where your progress chart will be displayed.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProgressChart;
