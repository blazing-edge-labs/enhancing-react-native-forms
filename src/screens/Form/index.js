import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class FormScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={style.container}>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
  }
})

export default FormScreen
