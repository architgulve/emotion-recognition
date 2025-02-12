import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{

        }}
      />
      <Tabs.Screen
        name="training"
      />
    </Tabs>
  )
}

export default TabsLayout