import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    }
    render() {
        return (
            < View style={styles.appContainer} >
                <View>
                    <Text style={styles.title}>MOVIE BROWSER</Text>
                </View>
                <View style={styles.searchBox}>
                    <Button
                        title="Go to Search"
                        onPress={() => this.props.navigation.navigate('Search', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })}
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    },
    searchBox: {
        marginTop: 25,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
    }
})