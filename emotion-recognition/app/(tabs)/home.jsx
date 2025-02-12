import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fffdee",
      }}
    >
      <StatusBar style="dark" />
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
          <View style={{}}>
            <Text
              style={{
                fontSize: 30,
                color: "#162B47",
                fontWeight: "800"
              }}
            >
              Hello!
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
