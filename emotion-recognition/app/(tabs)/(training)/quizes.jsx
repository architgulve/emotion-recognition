import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizComp from "../../../components/QuizQuestion";

const Quizes = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fffdee", flex: 1 }}>
      <View
        style={{ backgroundColor: "#fffdee", flex: 1, alignItems: "center" }}
      >
        {/* Header */}
        <View
          style={{
            height: "10%",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: "#162B47", fontWeight: "800" }}>
            QUIZES
          </Text>
        </View>

 
        <View style={{ width: "90%", alignItems: "center"  }}>
     
          <QuizComp />

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: "30%",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "48%",
                height: "100%",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Image 1</Text>
            </View>
            <View
              style={{
                width: "48%",
                height: "100%",
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Image 2</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quizes;
