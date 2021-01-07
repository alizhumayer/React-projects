import React from 'react'
import Constants from 'expo-constants'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Sister Act has 1 page
// Mulan has 2 pages
// Batman has 37 pages

const processTitle = movie => ({
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    imdb: movie.imdbID
})

const callApiPages = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { Search } = await response.json()
        const results = Search.map(movie => processTitle(movie))
        return results
    } catch (err) {
        this.setState({ err: err.message })
        console.log('nope')
    }
}
const callApi = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { totalResults } = await response.json()
        let pageNum = Math.ceil(totalResults / 10)
        let searchResults = []
        let c = []

        for (i = 1; i <= pageNum; i++) {
            const multiPageResults = await callApiPages(`${url}&page=${i}`)
            c = searchResults.concat(multiPageResults)
            searchResults = c
        }
        return searchResults
    } catch (err) {
        this.setState({ err: err.message })
        console.log('no soup for you')
    }
}

class NoResults extends React.Component {
    render() {
        // console.log(this.props.results)
        if (this.props.results.length < 1 && !this.props.loading) { return (<Text> No Results</Text>) }
        else { return null }
    }
}

export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err: '',
            results: [],
            pages: 0,
            loading: true
        }
    }
    static navigationOptions = {
        title: 'Search Results',
    }
    getResults = async () => {
        const url = this.props.navigation.getParam('url', 'No-Url')
        try {
            const results = await callApi(url)
            this.setState({
                results: results
            })
        }
        catch (err) {
            this.setState({ err: err.message })
        }
    }

    componentWillMount() {
        this.getResults()
        this.timeout()
    }

    timeout = () => setTimeout(() => {
        this.setState({
            loading: false,
        });
    }, 2500)

    keyExtractor = (item, index) => index.toString()

    onSelectMovie = (item) => this.props.navigation.navigate('Detail',
        {
            title: item.title,
            type: item.type,
            year: item.year,
            imdb: item.imdb
        })
    render() {
        return (
            <View style={styles.appContainer}>
                <Text style={styles.search}>Search: {JSON.stringify(this.props.navigation.getParam('search', 'no-search'))}</Text>
                <Text style={styles.error}>{this.state.err}</Text>
                < NoResults results={this.state.results} loading={this.state.loading} />
                {this.state.loading && <Text>Loading...</Text>}

                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.results}
                    renderItem={({ item }) => (
                        < TouchableOpacity
                            style={styles.eachMovie}
                            onPress={() => this.onSelectMovie(item)}
                            key={i} >
                            <Text style={styles.data}>Title: {item.title}</Text>
                            <Text style={styles.data}>Year: {item.year}</Text>
                            <Text style={styles.data}>Type: {item.type}</Text>
                            <Text style={styles.data}>IMDb Number: {item.imdb}</Text>
                        </TouchableOpacity >
                    )} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
    },
    search: {
        fontSize: 30,
        paddingBottom: 10
    },
    error: {
        color: 'red'
    },
    eachMovie: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    data: {
        fontSize: 18,
        paddingVertical: 2,
    }
})
