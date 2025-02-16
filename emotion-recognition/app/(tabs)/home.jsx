import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TrainingComp from "../../components/TrainingComp";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fffdee",
      }}
    >
      <StatusBar style="dark" hidden={false} />
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
                fontWeight: "800",
              }}
            >
              Hello!
            </Text>
            <View
              style={{
                height: "40%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9ED2B3",
                borderRadius: 20,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#162B47",
                  fontWeight: "800",
                }}
              >
                What do you want to do?
              </Text>
            </View>
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <View style={{
                height: "150",
                width: "150",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9ED2B3",
                borderRadius: 20,
                marginVertical: 10,
              }}>
                <Text>Streak</Text>
              </View>
              <View style={{
                height: "150",
                width: "150",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#9ED2B3",
                borderRadius: 20,
                marginVertical: 10,
              }}>
                <Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
