import { StyleSheet, View } from 'react-native'
import React from 'react'
import ClarkBodyText from '../../../components/ClarkBodyText'

const MainErrorsScreen = () => {
  return (
    <View style={styles.container}>
      <ClarkBodyText
       title='Something went wrong. Please try again later.'
      />
    </View>
  )
}

export default MainErrorsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})