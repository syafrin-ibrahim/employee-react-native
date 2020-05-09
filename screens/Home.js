import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';
function Home(props) {
    const items = [
        { id : 1, name : "andi", postion : "web dev"},
        { id : 2, name : "andi", postion : "web dev"},
        { id : 3, name : "andi", postion : "web dev"},
        { id : 4, name : "andi", postion : "web dev"},
        { id : 5, name : "andi", postion : "web dev"},
        { id : 6, name : "andi", postion : "web dev"},
    ]
   const handleFab = (e)=>{
        console.log('on presse');
   }

   const datax = (item)=>{
       return(
        <Card style={classes.container}  key={item.id}>
            <View style={classes.cardView}>
            <Image source={{ uri : 'https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80' }}  style={classes.imagex}/> 
                <View style={{ marginLeft : 20}}>
                <Text style={ classes.text}>{ item.name}</Text>
                <Text>{item.postion}</Text>
                </View>
            </View>
        </Card>
       )
   }
    return (
        <View>
        <FlatList
         data = {items}
         renderItem = { ({item})=>{
            return datax(item);
         }} 
         keyExtractor = { item =>`${item.id}`}
        />
          

        
        <FAB style={classes.fab} small={false} icon="plus" theme={{ colors : {accent : "#006aff"}}} onPress={ handleFab}/>
         </View>
        )
}

const classes = StyleSheet.create({
    container: {
        
       margin : 5,
       backgroundColor : "purple",
       
    },
    cardView : {
      
        padding : 6,
        flexDirection : "row"
        
    },
    imagex : {
        height : 130,
        width : 110,
        borderRadius : 50/2
      },
      text : {
          fontSize : 23
         
      },
      fab : {
        position : 'absolute',
        margin : 16,
        right : 0,
        bottom : 0
      }
})
export default Home

