import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import IonIcons from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import { useFocusEffect } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <IonIcons name={"home"} size={26} color="#162B47" />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: "Training",
          tabBarLabel: "Training",
          tabBarIcon: () => (
            <IonIcons name={"clipboard"} size={26} color="#162B47" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
