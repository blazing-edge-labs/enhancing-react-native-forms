import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function ({ label }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  )
}