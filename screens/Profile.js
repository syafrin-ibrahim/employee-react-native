import React from 'react'
import { View, StyleSheet, Text, Image, Linking, Platform} from 'react-native'
import  LinearGradient from "react-native-linear-gradient";
import { Title,Card, Button } from "react-native-paper";
import   MaterialIcon  from 'react-native-vector-icons/MaterialIcons';
const Profile = ({ route }) => {

    const openDial = ()=>{
        if(Platform.OS === 'android'){
            Linking.openURL("tel:12345")
        }else{
            Linking.openURL("telprompt:12345")
        }
    }

    const {  name, postion } = route.params.item
    return (
        <View>
           <LinearGradient colors={['#0033ff', '#6bc1ff']} style={classes.root} />
           <View style={{ alignItems : 'center'}}>

                <Image style={{ width: 140, height: 140, borderRadius : 70, marginTop: -50}} 
                 source={{ uri : "https://images.unsplash.com/photo-1580309237429-661ea7cd1d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}} />
           </View>
           <View style={{ alignItems : 'center'}}>
            <Title>{name}</Title>
    <Text style={{ fontSize : 15 }}>{postion}</Text>
           </View>
           <Card style={classes.mycard} onPress={()=>{ Linking.openURL("mailto:deny@gmail.com")}}>
                <View style={classes.cardItem}>
                    <MaterialIcon name="email" size={30} color="#900"/>
                    <Text style={classes.myText}>deny@gmail.com</Text>
                </View>
           </Card>
           <Card style={classes.mycard} onPress={()=>openDial()}>
                <View style={classes.cardItem}>
                    <MaterialIcon name="phone-android" size={30} color="#900"/>
                    <Text style={classes.myText}>08122335455</Text>
                </View>
           </Card>
           <Card style={classes.mycard}>
                <View style={classes.cardItem}>
                    <MaterialIcon name="attach-money" size={30} color="#900"/>
                    <Text style={classes.myText}>deny@gmail.com</Text>
                </View>
           </Card>
            <View style={{ flexDirection : "row", justifyContent : "space-around", padding : 10}}>
            <Button icon="account-edit" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Edit
            </Button>
            <Button icon="account-edit" theme={theme} mode="contained" onPress={() => console.log('Pressed')}>
                    Delete
            </Button>
            </View>
           
        </View>

    )
}

const theme = {
    colors : {
        primary : '#006aff'
    }
}

const classes = StyleSheet.create({
    root : {
        
        
        paddingLeft: 15,
        paddingRight: 15,
        height :'30%'
    },
    myText : {
        fontSize : 15,
        marginTop : 5,
        marginLeft : 5
    },
    mycard : {
        margin : 3,
        padding : 8
        
    },
    cardItem : {
        flexDirection : "row"
    }
})

export default Profile;
