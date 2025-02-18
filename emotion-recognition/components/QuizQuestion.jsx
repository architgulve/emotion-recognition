import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { router } from "expo-router";

const QuizComp = ({ handlePress, question }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={{
        height: "40%",
        marginVertical: 10,
        width:"100%"
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{question}</Text>
      </View>
    </Pressable>
  );
};

export default QuizComp;
