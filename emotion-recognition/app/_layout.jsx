import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontLoaded] = useFonts({
    "Momentz": require("../assets/fonts/Momentz.otf")
  });
  return (
   <SafeAreaProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
   </SafeAreaProvider> 
  )
}

export default RootLayout