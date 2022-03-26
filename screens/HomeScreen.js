import React from 'react'
import { useState,useEffect } from 'react'
import { View, Button,FlatList} from 'react-native'
import NewsCard from './components/NewsCard'
import newsApi from '../apis/News'
const HomeScreen = ({navigation}) => {

const [news,setNews] = useState([])
useEffect(()=>{
    getNewsApi()
},[])


    // const newsResponse = async()=> {
    //     const resonse = newsApi.get('top-headlines?country=us&apiKey=0b662c1d6cfc4319982fe587169781e6')
    //     console.log((await resonse).data)
    // }

    function getNewsApi(){
        newsApi.get('top-headlines?country=us&apiKey=0b662c1d6cfc4319982fe587169781e6')
        .then(function(response){
            setNews(response.data)


        }).catch(function(error){
            console.log(error)
        })
    }

    if(!news){
        return null
    }

  return (

    <View>
        <FlatList  data={news.articles} 
        keyExtractor= {(item,index)=>'key'+index}
        renderItem={
            
            ({item})=>{
            console.log(item)
           return <NewsCard item={item}/>
        }
        
           
        }/>
        
    
    </View>

    // <View>
    //   <Button
    //     title='First'
    //     onPress={() => navigation.navigate("First")}
    //   />
    //   <Button
    //     title='Second'
    //     onPress={() => navigation.navigate("Second")}
    //   />
    // </View>
  )
}
export default HomeScreen