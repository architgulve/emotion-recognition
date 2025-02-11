import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const EntryPoint = () => {
  return (
    <SafeAreaView
    style={{
      backgroundColor: '#fffdee'
    }}>
      <View 
      style={{
        backgroundColor: '#fffdee',
        height: '100%',
        alignItems: 'center'
      }}>
        <Text
        style={{
          color: '#162B47',
          fontFamily: 'Momentz',
          fontWeight: '900',
          fontSize: '35'
        }}>
          BambooBud</Text>
        <Pressable
          // onPress={router.push("/(tabs)/home")}
        >
          <Text>
            Home
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default EntryPoint