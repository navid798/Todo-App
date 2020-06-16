import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-ionicons";
import Context from "../../Context";

const Home = () => {
  const { state, deletetodo } = useContext(Context);
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
              <Text>
                {item.title}-{item.id}
              </Text>
              <Icon name="trash" onPress={() => deletetodo(item.id)} />
            </View>
          );
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  Button: {
    margin: 30,
  },
});
