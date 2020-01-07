import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MainScreen from './screens/MainScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'
import {Provider} from 'react-redux'
import  {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'



let store = createStore(reducer, applyMiddleware(thunk))


const MainStack = createStackNavigator({
  MainScreen,
  DetailsScreen
},
  {initialRouteName: 'MainScreen'}
)

const MainTabs = createBottomTabNavigator({
  News: MainStack,
  Settings: SettingsScreen
}
) 

const AppContainer = createAppContainer(MainTabs)

export default class App extends React.Component{
  render(){
    return(
    <Provider store={store}><AppContainer/></Provider>
  )}
}


