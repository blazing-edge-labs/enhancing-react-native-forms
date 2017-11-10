import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

export default function ({ label, ...rest }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.input}
          {...rest}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 20,
  },
  label: {
    color: 'black',
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    height: 40,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
    color: 'black'
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    height: 40
  },
})