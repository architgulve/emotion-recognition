import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const ImageRecognition = () => {
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fffdee",
      }}
    >
      <StatusBar hidden={true}/>
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
          <Text>
            camera view
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ImageRecognition