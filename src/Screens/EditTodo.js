import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Context from "../../Context";
import { useRoute } from "@react-navigation/native";

const EditTodo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { edittodo } = useContext(Context);

  const route = useRoute();
  const id = route.params.id;

  return (
    <View>
      <View style={styles.textView}>
        <Text style={styles.Text}>Edit Todo</Text>
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
      <Text>{route.params.id}</Text>
      <View style={styles.Button}>
        <Button
          title="Edit todo"
          onPress={() => {
            edittodo({ title, content, id });
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

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

export default EditTodo;
