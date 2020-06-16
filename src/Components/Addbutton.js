import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-ionicons";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.Button}>
      <Icon name="add" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginRight: 10,
  },
});

//make this component available to the app
export default AddButton;
