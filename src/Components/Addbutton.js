import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-ionicons";
import { useNavigation } from "@react-navigation/native";

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Button}>
      <Icon name="add" onPress={() => navigation.navigate("CreateTodo")} />
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginRight: 10,
  },
});

export default AddButton;
