import React from "react";
import CreateTodo from "../Screens/CreateTodo";
import EditTodo from "../Screens/EditTodo";
import Home from "../Screens/Home";
import ShowTodo from "../Screens/ShowTodo";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SwitchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "All My Todo",
          headerTitleAlign: "center",
        }}
      >
        {props => <Home {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="EditTodo"
        options={{
          headerTitleAlign: "center",
        }}
      >
        {props => <EditTodo {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="CreateTodo"
        options={{
          headerTitleAlign: "center",
        }}
      >
        {props => <CreateTodo {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="ShowTodo"
        options={{
          headerTitleAlign: "center",
        }}
      >
        {props => <ShowTodo {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default SwitchNavigator;
