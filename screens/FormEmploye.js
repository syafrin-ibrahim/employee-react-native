import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Alert, Image} from 'react-native'
import { TextInput, Button} from "react-native-paper";
import ImagePicker from 'react-native-image-picker';



const FormEmploye = () => {
   
    const [ form, setForm] = useState({
        name : '',
        phone : '',
        email : '',
        salary : '',
        image : ''
    })

    const [file, setFile] = useState({
        filepath: {
            data: '',
            uri: ''
          },
       fileData: '',
      fileUri: ''
    })
    const { name, phone, email, salary, image} = form

    const [ modal , setModal ] = useState(false);  

    const [ photo, setPhoto ] = useState({
        myfoto : '',
        subs : "aman"
    })

    const handleImage = ()=>{
        let options = {
            
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
            mediaType : 'photo',
            quality : 0.5,
            allowsEditing : true,
            maxHeight : 150,
            maxWidth : 150
          };
        ImagePicker.launchImageLibrary(options, (response)=>{
           // console.log("response" , response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                const source = { 
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                }
                
            handleUpload(source);
             console.log("file uri => ", source);
               
              }

            //   let newFile = {uri:response.uri,
            //      type:`test/${response.uri.split(".")[1]}`,
            //       name:`test.${response.uri.split(".")[1]}`
            //   }
              
    });
    } 


    const handleCamera = ()=>{
        let options = {
                        storageOptions: {
                            skipBackup: true,
                            path: 'images',
                        },
                        mediaType : 'photo',
                        quality : 0.5,
                        allowsEditing : true,
                        maxHeight : 150,
                        maxWidth : 150
                    }
                        
         ImagePicker.launchCamera(options, (response)=>{
            //console.log("response" , response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                //const source = { uri: response.uri };
                //console.log('response', JSON.stringify(response));
                // setFile({
                //   filePath: response,
                //   fileData: response.data,
                //   fileUri: response.uri
                // });

                // let newFile = {uri:response.uri,
                //     type:`test/${response.uri.split(".")[1]}`,
                //      name:`test.${response.uri.split(".")[1]}`
                //  }
                 ///handleUpload(newFile);
                   
                    //console.log("file uri => ", newFile);


              }
        });
    }

    const handleUpload =  (phto)=>{
        const data = new FormData();
        data.append('file', phto);
        data.append('upload_preset', 'syafrin12');
        data.append("cloud_name", "pt-software-media");
         fetch("https://api.cloudinary.com/v1_1/pt-software-media/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{
            console.log(data.url)
            setPhoto(data.url);
        }).catch(function(err){
            console.log("erronya === > ", err.message)
            Alert.alert(" an error occured while uploading");
        });
    }
    return (
        <View style={classes.root}>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Name" name="name" value={email} onChangeText={text => setForm({ name : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Phone" name="phone" value={phone} onChangeText={text => setForm({ phone : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Email" name="email" value={email} onChangeText={text => setForm({ email : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Salary" name="salary" value={salary} onChangeText={text => setForm({ salary : text})}/>
            <Button theme={ theme } style={classes.input} mode="outlined" icon="upload" onPress={(e)=>setModal(true)}>upload</Button>
            <View style={classes.ImageSections}>
             
              <View>
                    <Image source={{  uri : " http://res.cloudinary.com/pt-software-media/image/upload/v1589027524/jz2y3pwir8xedgbgy82h.jpg" }} style={classes.images} /> 
                    {/* <Text style={{//textAlign:'center'}}>{photo.subs}</Text> */}
                    { photo.myfoto === '' ? ( <Text>Data Belum Di Upload</Text>) : (<Text>Data Berhasil Di Upload</Text>) }
              </View>
            </View>
           
            <Modal animationType="slide" visible={modal} onRequestClose={()=>{ setModal(false)}} transparent={true}>
                <View style={classes.modalContainer}>
                    <View style={classes.modal}>
                        <Button mode="outlined" icon="camera" onPress={(e)=>handleCamera()}>kamera</Button>
                        <Button mode="outlined" icon="image-area" onPress={(e)=>handleImage()}>galeri</Button>

                    </View>
                    <Button mode="outlined" icon="upload" onPress={(e)=>setModal(false)}>cancel</Button>
                </View>
            </Modal>
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
        flex : 1
    },
    input : {
        margin : 5
    },
    modal : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10
    },
    modalContainer : {
        position : 'absolute',
        bottom : 2,
        width : '100%'
    }, 
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
      },
      images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      }
})
export default FormEmploye