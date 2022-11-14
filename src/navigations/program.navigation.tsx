import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QrCodeScreen, ProgramScreen } from "../screens";
import { QrCodeStackParamList } from "../types/Screen.types";
import colors from "../styles/colors";

const Stack = createStackNavigator<QrCodeStackParamList>();

export default function QrCodeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.darkBlue },
    }}>
      <Stack.Screen name="Program" component={ProgramScreen} options={{
        title: 'Programação',
      }} />
      <Stack.Screen name="QrCode" component={QrCodeScreen} />
    </Stack.Navigator>
  );
}