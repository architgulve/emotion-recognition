import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import TrainingComp from "../../../components/TrainingComp";
import { useFonts } from "expo-font";

const Training = () => {
  const [fontsLoaded] = useFonts({
    Momentz: require("../../../assets/fonts/Momentz.otf"),
  });

  if (!fontsLoaded) {
    return null; // Prevent rendering until fonts are loaded
  }
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
          <Text
            style={{
              fontSize: 30,
              color: "#162B47",
              fontWeight: "800",
              fontFamily: "Momentz",
            }}
          >
            Training
          </Text>
          <TrainingComp
            handlePress={() => {
              router.push("./imagerecog");
            }}
            title={"IMAGE RECOGNITION"}
          />
          <TrainingComp
            handlePress={() => {
              router.push("./chatbot");
            }}
            title={"CHATBOT"}
          />
          <TrainingComp
            handlePress={() => {
              router.push("./quizes");
            }}
            title={"QUIZES"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Training;
