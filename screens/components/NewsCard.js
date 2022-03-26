import react from 'react'
import React from 'react'
import {StyleSheet,Image,View,Text,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')


const NewsCard = ({item}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author} >{item.author}</Text>
            <Image style={styles.image} source={{uri:item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
        margin:width*0.1,
        backgroundColor:'white',
        borderRadius:width*0.05,
        shadowColor:'#000',
        shadowOffset:'width:0,height:1',
        shadowOpacity: '0.8',
        shadowRadius: 1

    
    },
 title:{
     color:'black',
     fontSize:25,
     marginLeft:width*0.06,
    marginRight:width*0.06
     

 },

 author:{
    color:'gray',
    fontSize:18,
    fontStyle:'italic',
    marginLeft:width*0.06,
    marginRight:width*0.06

 },
 description:{
    color:'gray',
    fontSize:20,
    marginLeft:width*0.06,
    marginRight:width*0.06
 },
 image:{
    margin:width*0.06,
    height:height/5
    
 }

})

export default NewsCard