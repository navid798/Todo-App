import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import Context from "../../Context";

const Home = () => {
  const { state, addtodo } = useContext(Context);
  return (
    <View>
      <Button title="add" onPress={addtodo} color="red" />
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({});
