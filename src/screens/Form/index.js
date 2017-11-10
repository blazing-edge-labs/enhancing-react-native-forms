import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import TextInput from '../../components/TextInput'

class FormScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <View style={styles.wrapper}>
          <TextInput label='Label for first input component'/>
          <TextInput label='Label for second input component'/>
          <TextInput label='Label for third input component'/>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5
  }
})

export default FormScreen
