import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import TabNavigation from "./tab.navigation";
import { useAuth } from "../hook/auth";

export default function Navigation() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user && user.comissao ? <TabNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
}