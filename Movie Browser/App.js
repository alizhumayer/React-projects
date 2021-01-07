import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Navigation
import AppContainer from './navigation/AppNavigator'

export default function App() {

  return (
    <AppContainer />
  )
}

// Allow users to search for movies included in the Open Movie Database 
// Allow users to view additional information about any movies they select

// There should be a search screen that allows users to search for movies
// You should show more than 10 results if more than 10 results exist
// There should be a screen that shows additional information about a selected movie