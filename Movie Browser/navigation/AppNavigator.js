import React from 'react'
import { Button, Platform, Text, View } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'
import ResultsScreen from '../screens/ResultsScreen'

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: `Welcome`,
                headerBackTitle: null,
            })
        }
    },

    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
)

const SearchStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: () => ({
                title: `Search View`,
                headerBackTitle: null
            })
        },
        Results: {
            screen: ResultsScreen,
            navigationOptions: () => ({
                title: `Search Results`,
                headerBackTitle: null
            }),
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: ({ navigation }) => ({
                headerBackTitle: null
            }),
        }
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
)

const AppContainer = createAppContainer(createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    }
))

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state
    let IconComponent = Ionicons
    let iconName
    if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`

    } else if (routeName === 'Search' || routeName === 'Detail' || routeName === 'Results') {
        iconName = `ios-search`
    }
    return <IconComponent name={iconName} size={25} color={tintColor} />
}

export default AppContainer
