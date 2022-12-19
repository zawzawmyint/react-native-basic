import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItemLIst = (props) => {
  const deleteGoalItem = () => {
    props.onDeleteGoal(props.id);
  };
  return (
    <View style={styles.goalItme}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItemLIst;

const styles = StyleSheet.create({
  goalItme: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
