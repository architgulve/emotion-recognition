import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import TrainingComp from "../../../components/TrainingComp";

const Training = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fffdee",
      }}
    >
      <View
        style={{
          backgroundColor: "#fffdee",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "90%",
          }}
        >
          <Text>Training</Text>
          <TrainingComp
            handlePress={() => {router.push("./imagerecog")}}
            title={"IMAGERECOGNITION"}
          />
          <TrainingComp
            handlePress={() => {router.push("./chatbot")}}
            title={"CHATBOT"}
          />
          <TrainingComp
            handlePress={() => {router.push("./quizes")}}
            title={"QUIZES"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Training;
