import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#9ED2B3'
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home" size={26} color="white"/>
          )
        }}
      />
      <Tabs.Screen
        name="(training)"
        options={{
          title: 'Training',
          tabBarIcon: () => (
            <Ionicons name="barbell" size={26} color="white"/>
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout