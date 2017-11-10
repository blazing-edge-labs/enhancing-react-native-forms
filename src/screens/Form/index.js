import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import TextInput from '../../components/TextInput'

class FormScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <View>
          <Text>Hello world!</Text>
          <TextInput label='Label for first input component'/>
        </View>
      </SafeAreaView>
    )
  }
}

export default FormScreen
