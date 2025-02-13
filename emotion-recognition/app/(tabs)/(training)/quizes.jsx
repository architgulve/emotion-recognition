import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Quizes = () => {
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
            QUIZES
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Quizes