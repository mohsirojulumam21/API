import {  FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {Component} from 'react'

class LoginTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchdata: '',
      datamovie:[]
    };
  }

  ambildata = () => {
    fetch('https://www.omdbapi.com/?apikey=dcea9952&s='+ this.state.searchdata)
    .then((Response) => Response.json())
    .then((json) => this.setState({datamovie:json.search}
      
    ,()=>console.log(json)) )
    .catch((err)=> console.log(err))
  }
  render(){
    return (
      <view style={{flex: 1}}>
        <view style={{
          flex: 1, backgroundColor: '#000', justifyContent:'center', alignItems:'center'
          }}>

            <text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>movie IMDB</text>
          </view>
            <view style={{flex:7}}>

            </view>

            <view style={{backgroundColor: '#fff', flexDirection: 'row',
        justifyContent:'center',alignItems:'flex-start',marginTop: 10}}>
          <view>
          <TextInput
           placeholder='input search movie'
           onChangeText={(value) => this.setState({searchdata : value})}
           style={{
            marginHorizontal: 20, paddingHorizontal: 10,
            borderBottomColor:'#000',
            borderBottomWidth: 2,
            width:200
           }}
          
          />
          </view>
          <view>
            <TouchableOpacity style={{
              backgroundColor: '#000',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 10,
              elevation: 5
            }}
            onPress={() => this.ambildata()}
            >
            <text style={{color: '#fff'}}>cari</text>
            </TouchableOpacity>
          </view>   
        </view>
        <FlatList
          data={this.state.datamovie}
          keyExtractor={(item)=>item.imdbID}
          renderItem={({item,index}) => (
            <View style={{marginTop:10}}>
              <text>{item.Title}</text>
              <text>{item.Year}</text>
            </View>
)}
/>  
      </view>
    )
  }
}
    
    
   
    
    