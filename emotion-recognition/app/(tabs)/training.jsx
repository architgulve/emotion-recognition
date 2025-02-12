import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Training = () => {
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
      }}>
        <Text>Training</Text>
      </View>
    </SafeAreaView>
  )
}

export default Training