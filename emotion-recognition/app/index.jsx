import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import Logo from "../assets/svg/BambooBud.svg";
import { StatusBar } from "expo-status-bar";
import Panda from "../assets/svg/Panda.svg";

const EntryPoint = () => {
  const [fontsLoaded] = useFonts({
    Momentz: require("../assets/fonts/Momentz.otf"),
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
      <StatusBar hidden={true} />

      <Panda
        width={400}
        style={{
          position: "absolute",
          top: 315,
          right: 30
        }}
      />
      <View
        style={{
          // backgroundColor: "#fffdee",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            width: "80%",
          }}
        >
          <View
            style={{
              height: "20%",
              justifyContent: "center",
            }}
          >
            <Logo width={300} />
          </View>

          <Pressable
            onPress={() => {
              router.push("/(tabs)/home");
            }}
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#9ED2B3",
                padding: "10",
                width: "100%",
                borderRadius: 100,
                alignItems: "center",
                marginBottom: "40",
                padding: "20",
              }}
            >
              <Text
                style={{
                  fontSize: "20",
                  fontWeight: "500",
                  color: "#162B47",
                  // fontFamily: "Momentz",
                }}
              >
                Continue
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EntryPoint;
