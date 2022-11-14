import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SairScreen } from "../screens";
import ProgramNavigation from "./program.navigation"
import colors from "../styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: colors.darkBlue,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveBackgroundColor: colors.darkBlue,
                tabBarInactiveTintColor: colors.white,
            }}
        >
            <Tab.Screen
                name="QR CODE"
                component={ProgramNavigation}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="exit" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}