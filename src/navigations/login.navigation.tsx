import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens";
import { LoginStackParamList } from "../types/Screen.types";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}