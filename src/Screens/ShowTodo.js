import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

const ShowTodo = ({ navigation }) => {
  const route = useRoute();
  const id = route.params.id;

  return (
    <View>
      <View style={styles.Viewshowtodo}>
        <Text style={styles.title}>Todo Title:</Text>

        <Text>{route.params.title}</Text>

        <Text style={styles.content}>My Todo Is:</Text>

        <Text>{route.params.content}</Text>
      </View>

      <View style={styles.Button}>
        <Button
          title="navigate to home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={styles.Button}>
        <Button
          title="edit todo"
          onPress={() => {
            navigation.navigate("EditTodo", { id });
          }}
          color="red"
        />
      </View>
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
  Button: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  Viewshowtodo: {
    marginLeft: 20,
  },
});

export default ShowTodo;
