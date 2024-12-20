import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    setGoals([...goals, { id: goals.length.toString(), goal }]);
    setGoal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Fitness Goals</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        value={goal}
        onChangeText={setGoal}
      />
      <Button title="Add Goal" onPress={addGoal} />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.goal}</Text>}
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

export default GoalSetting;
