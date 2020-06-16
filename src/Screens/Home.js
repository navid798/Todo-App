import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-ionicons";
import Context from "../../Context";

const Home = ({ navigation }) => {
  const { state, deletetodo } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowTodo", {
                  title: item.title,
                  content: item.content,
                })}
            >
              <View style={styles.todoView}>
                <Text style={styles.TodoTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deletetodo(item.id)}>
                  <Icon name="trash" style={styles.trash} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  todoView: {
    marginHorizontal: 15,
    borderBottomWidth: 1,
    paddingBottom: 25,
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trash: {
    padding: 7,
  },
  TodoTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
