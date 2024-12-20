import React from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import WorkoutLog from './components/WorkoutLog';
import NutritionTracker from './components/NutritionTracker';
import ProgressChart from './components/ProgressChart';
import GoalSetting from './components/GoalSetting';
import FitnessTrackerHeader from './components/FitnessTrackerHeader';
import FitnessTrackerFooter from './src/components/FitnessTrackerFooter';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Fitness Tracker</Text>
        <WorkoutLog />
        <NutritionTracker />
        <ProgressChart />
        <GoalSetting />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#495E57', }}>
      <FitnessTrackerHeader />
      <App />
    </View>
  );
}


export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

export default App;
