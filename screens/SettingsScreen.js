import React from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import Constants from 'expo-constants';


export default class SettingsScreen extends React.Component{
    

    render(){
        return(
            <ScrollView >
                <Text style={styles.title}>Categories</Text>
                <View style={styles.listContainer}>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/entertainment.jpeg')}/>
                            <Text style={styles.categoryTitle}>Entertainment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/technology.jpg')}/>
                            <Text style={styles.categoryTitle}>Technology</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/business.jpg')}/>
                            <Text style={styles.categoryTitle}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/science.jpg')}/>
                            <Text style={styles.categoryTitle}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/health.jpg')}/>
                            <Text style={styles.categoryTitle}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                            <Image style={styles.image} source={require('../assets/sports.jpg')}/>
                            <Text style={styles.categoryTitle}>Sports</Text>
                    </TouchableOpacity>
                </View>  
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    category:{
        alignItems: 'center',
        marginBottom: 30
    },
    image:{
        width: 165,
        height: 165,
        borderRadius: 15,
    },
    listContainer:{
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    categoryTitle:{
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold'
    },
    title:{
        paddingTop: Constants.statusBarHeight + 10,
        marginLeft: 25,
        fontSize: 40,
        fontWeight: 'bold'
    }
})