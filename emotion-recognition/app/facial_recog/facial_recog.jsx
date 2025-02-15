import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const FacialRecog = () => {
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
                <Text>FacialRecog</Text>
            </View>
        </SafeAreaView>
    );
}

export default FacialRecog