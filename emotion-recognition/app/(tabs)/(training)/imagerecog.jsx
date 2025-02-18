import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { WebView } from 'react-native-webview'

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
          {/* <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#9ED2B3'
            }}
          >
            
          </View> */}
          <WebView
            style={{
              width: "100%",
              height: "100%"
              
            }}
           source={{
            uri: 'http://192.168.20.164:8080'
           }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ImageRecognition