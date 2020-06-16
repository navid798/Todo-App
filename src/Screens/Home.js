import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import Icon from "react-native-ionicons";
import Context from "../../Context";

const Home = () => {
  const { state, addtodo } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginHorizontal: 15,
                borderBottomWidth: 1,
                paddingBottom: 25,
                paddingTop: 25,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>{item.title}</Text>
              <Icon name="trash" />
            </View>
          );
        }}
      />
      <View style={styles.Button}>
        <Button title="add" onPress={addtodo} color="red" />
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  Button: {
    margin: 30,
  },
});
