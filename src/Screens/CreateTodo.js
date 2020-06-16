import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Context from "../../Context";

const CreateTodo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addtodo } = useContext(Context);

  return (
    <View>
      <View style={styles.textView}>
        <Text style={styles.Text}>Create Todo</Text>
      </View>

      <TextInput
        placeholder="Title"
        style={styles.TextInput}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        placeholder="content"
        style={styles.TextInput}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <View style={styles.Button}>
        <Button
          title="add todo"
          onPress={() => {
            addtodo({ title, content });
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};
export default CreateTodo;
const styles = StyleSheet.create({
  TextInput: {
    margin: 20,
    backgroundColor: "#bbcfd5",
  },
  textView: {
    alignItems: "center",
  },
  Text: {
    fontSize: 40,
  },
  Button: {
    marginHorizontal: 20,
  },
});
