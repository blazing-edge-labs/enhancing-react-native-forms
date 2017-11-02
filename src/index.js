import React from 'react'
import { Provider } from 'react-redux'

import store from './reducers'
import FormScreen from 'screens/Form'

export default function () {
  return (
    <Provider store={store}>
      <FormScreen />
    </Provider>
  )
}