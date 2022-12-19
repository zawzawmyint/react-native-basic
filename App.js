import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItemLIst from "./components/GoalItemLIst";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCoureGoals] = useState([]);
  const [startModalGoal, setStartModalGoal] = useState(false);

  const startModalNewGoal = () => {
    setStartModalGoal(true);
  };

  const endModalNewGoal = () => {
    setStartModalGoal(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCoureGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endModalNewGoal();
  };

  const deleteGoalHandler = (id) => {
    setCoureGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          style={styles.button}
          title="start New Goal"
          onPress={startModalNewGoal}
          color="#b180f0"
        />

        <GoalInput
          addGoalHandler={addGoalHandler}
          endModalNewGoal={endModalNewGoal}
          visible={startModalGoal}
        />

        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItemLIst
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 4,
  },
});
