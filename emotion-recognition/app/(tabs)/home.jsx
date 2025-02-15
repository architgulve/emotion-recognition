import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-web";

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
                fontWeight: "800",
              }}
            >
              Hello!
            </Text>
          </View>
          <View
            style={{
              height: "25%",
              width: "100%",
              backgroundColor: "#9ED2B3",
              borderRadius: 20,
              marginTop: 10,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#162B47",
                fontWeight: "800",
              }}
            >
              Chat
            </Text>
          </View>
          <View
            style={{
              height: "25%",
              width: "100%",
              backgroundColor: "#9ED2B3",
              borderRadius: 20,
              marginTop: 35,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#162B47",
                fontWeight: "800",
              }}
            >
              Facial Recognition
            </Text>
            {/* <Button
              onPress={() => router.push("/facial_recog/facial_recog")}
              title="Facial Recognition"
            /> */}
          </View>
          <View
            style={{
              height: "27%",
              width: "100%",
              backgroundColor: "#9ED2B3",
              borderRadius: 20,
              marginTop: 30,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#162B47",
                fontWeight: "800",
              }}
            >
              Daily Quiz
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
