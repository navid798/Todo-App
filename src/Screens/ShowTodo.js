import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const ShowTodo = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <Text style={styles.title}>Todo Title:</Text>

      <Text>{route.params.title}</Text>
      <Text style={styles.content}>My Todo Is:</Text>
      <Text>{route.params.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ShowTodo;
