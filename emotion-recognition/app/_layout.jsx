import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
   <SafeAreaProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
   </SafeAreaProvider> 
  )
}

export default RootLayout