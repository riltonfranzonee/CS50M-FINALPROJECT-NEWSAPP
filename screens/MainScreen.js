import React from 'react'
import {View, Text, FlatList, Button, StyleSheet, Image} from 'react-native'
import {connect} from 'react-redux'
import * as actionCreators from '../redux/actions'
import { TouchableOpacity } from 'react-native-gesture-handler'

class MainScreen extends React.Component{

    render(){
        return(
            <View style={styles.page}>
                <Button title="Submit" onPress={this.props.loadNews}/>
                <FlatList data={this.props.articles} renderItem={({item}) => (
                    <TouchableOpacity style={styles.row}>
                            <Image style={styles.image} source={{uri: item.urlToImage}}/>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text>Published at: {item.publishedAt}</Text>
                            </View>
                    </TouchableOpacity>
                )}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
   articles: state.articles
})
const styles = StyleSheet.create({
    page:{
        backgroundColor: '#fff'
    },
    row:{
        flexDirection: 'row',
        padding: 20,
        paddingLeft: 5,
        borderBottomWidth:.2,
    },
    image:{
        height: 120,
        width: 120,
        borderRadius: 10,
        marginRight: 20
    },
    title:{
        justifyContent: 'space-around',
        flexShrink: 1
    },
    titleText:{
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, actionCreators)(MainScreen)