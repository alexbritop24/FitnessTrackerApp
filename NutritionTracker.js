import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const NutritionTracker = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [nutritionLog, setNutritionLog] = useState([]);

  const addFood = () => {
    setNutritionLog([...nutritionLog, { id: nutritionLog.length.toString(), food, calories }]);
    setFood('');
    setCalories('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food"
        value={food}
        onChangeText={setFood}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter calories"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />
      <Button title="Add Food" onPress={addFood} />
      <FlatList
        data={nutritionLog}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.food} - {item.calories} calories
          </Text>
        )}
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

export default NutritionTracker;
