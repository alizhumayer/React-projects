import React from 'react'
import Constants from 'expo-constants'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'

let apiKey = '58e46ddd'

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isFormValid: false,
            apiUrl: 'http://www.omdbapi.com/?apikey=${apiKey}&',
        }
    }

    handleTextChange = search => {
        if (search.length > 0) {
            this.setState({
                search,
                isFormValid: true
            })
        }
        else {
            this.setState({
                search,
                isFormValid: false
            })
        }
    }

    handleSubmit = () => {
        let cleanedSearch = this.state.search.trim().replace(/\s/g, '+').toLowerCase()
        let newUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${cleanedSearch}`
        this.setState({
            apiUrl: newUrl
        }, () => this.props.navigation.navigate('Results',
            {
                url: this.state.apiUrl,
                search: this.state.search,
            })
        )
    }

    render() {
        return (
            <View style={styles.appContainer} >
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        style={styles.input}
                        placeholder="Type name of movie here"
                        value={this.state.search}
                        onChangeText={this.handleTextChange}
                        autoCapitalize="words"
                        clearButtonMode="always"
                    />
                    <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
                </KeyboardAvoidingView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 70,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
})

