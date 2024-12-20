import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const WorkoutLog = () => {
  const [workout, setWorkout] = useState('');
  const [log, setLog] = useState([]);

  const addWorkout = () => {
    setLog([...log, { id: log.length.toString(), name: workout }]);
    setWorkout('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your workout"
        value={workout}
        onChangeText={setWorkout}
      />
      <Button title="Add Workout" onPress={addWorkout} />
      <FlatList
        data={log}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
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
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  item: {
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default WorkoutLog;
