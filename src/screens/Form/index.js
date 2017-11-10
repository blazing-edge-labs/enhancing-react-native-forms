import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

class FormScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <View>
          <Text>Hello world!</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default FormScreen
