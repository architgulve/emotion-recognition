import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import Logo from "../assets/svg/BambooBud.svg";

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
      <View
        style={{
          backgroundColor: "#fffdee",
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
            justifyContent: "center"
          }}>
            <Logo width={350}/>
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
                padding: "12",
                width: "100%",
                borderRadius: 100,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "20",
                  fontWeight: "500",
                  color: "#162B47"
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
