import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TrainingLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="training"/>
      <Stack.Screen name="imagerecog"/>
      <Stack.Screen name="chatbot"/>
      <Stack.Screen name="quizes"/>
    </Stack>
  )
}

export default TrainingLayout