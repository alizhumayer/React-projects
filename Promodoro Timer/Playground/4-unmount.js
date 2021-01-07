// lecture3.pdf slide 15
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
  }
})

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(this.inc, 1000)
  }
  
  // If without this, the counter will still count in background
  // (keep showing 'increment!')
  // even if it is not shown on screen
  // even worse, when toggle multiple counter, the old one still count
  // may cause memory leak
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  inc = () => {
    console.log('increment!')
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <Text style={styles.count}>{this.state.count} </Text>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }
  
  // When press the Button, it will let counter disappear
  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))

  // this was the render() code originally written in lecture
  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      )
    } else {
      return (
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.toggleCounter} />
        </View>
      )
    }
  }

  // this is a more concise version with the same functionality
  render() {
    return (
      <View style={styles.appContainer}>
        <Button title="toggle" onPress={this.toggleCounter} />
        {this.state.showCounter && <Counter />}
      </View>
    )
  }
}
