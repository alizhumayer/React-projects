import React from 'react'
import Constants from 'expo-constants'
import { Button, Image, Platform, ScrollView, StyleSheet, View, Text } from 'react-native'


const processDetails = (movie) => ({
    Title: movie.Title,
    Year: movie.Year,
    Released: movie.Released,
    Type: movie.Type,
    Genre: movie.Genre,
    Rated: movie.Rated,
    Runtime: movie.Runtime,
    Director: movie.Director,
    Writers: movie.Writers || movie.Writer,
    Actors: movie.Actors,
    Plot: movie.Plot,
    Awards: movie.Awards,
    IMDbRating: movie.imdbRating,
    IMDbNumber: movie.imdbID,
})

class ShowImage extends React.Component {
    render() {
        if (Platform.OS === 'ios' && this.props.poster != "N/A" && this.props.poster != "") {
            return (
                <View style={styles.imageView}>
                    <Image
                        style={{ width: 268, height: 400 }}
                        source={{ url: this.props.poster }}
                        resizeMode='cover'
                    />
                </View>
            )
        }
        else { return null }
    }
}

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            dataKeys: [],
            poster: "",
        }
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params.title,
        };
    }
    componentWillMount() {
        this.getDetails()
    }

    getDetails = async () => {
        let apiKey = '58e46ddd'
        let imdb = this.props.navigation.getParam('imdb', '')
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdb}`
        try {
            const response = await fetch(`${url}`)
            const results = await response.json()
            const data = await processDetails(results)

            this.setState({
                data: data,
                dataKeys: Object.keys(data),
                poster: results.Poster,
            })
        }
        catch (err) {
            this.setState({ err: err.message })
        }
    }
    render() {
        const title = this.props.navigation.getParam('title', 'Title').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
        const year = this.props.navigation.getParam('year', 'Year')

        const data = this.state.data
        const dataKeys = this.state.dataKeys

        const manageData = (dataKeys).map((key, i) => {
            if (data[key] != 'N/A' && data[key] != '') {
                return <Text key={i} style={styles.details}>{key}: {data[key]}</Text>
            }
        })

        return (
            <ScrollView style={styles.appContainer} >
                {/* < Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                /> */}

                < ShowImage poster={this.state.poster} />
                <View style={styles.manageData}>
                    {manageData}
                </View>

            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
        textAlign: 'center'
    },
    details: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    imageView: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    manageData: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
    }
})

