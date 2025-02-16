import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { router } from "expo-router";

const TrainingComp = ({ handlePress, title }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={{
        height: "28%",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#9ED2B3",
          padding: 20,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default TrainingComp;
