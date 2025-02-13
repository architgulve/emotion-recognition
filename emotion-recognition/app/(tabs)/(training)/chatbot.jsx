import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatBot = () => {
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
          <Text>
            CHATBOT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatBot;
