import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal} from 'react-native'
import { TextInput, Button} from "react-native-paper";


const FormEmploye = () => {
    const [ form, setForm] = useState({
        name : '',
        phone : '',
        email : '',
        salary : '',
        image : ''
    })
    const { name, phone, email, salary, image} = form

    const [ modal , setModal ] = useState(false);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })

        console.log(e.target.value);
    }
    return (
        <View style={classes.root}>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Name" name="name" value={email} onChangeText={text => setForm({ name : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Phone" name="phone" value={phone} onChangeText={text => setForm({ phone : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Email" name="email" value={email} onChangeText={text => setForm({ email : text})}/>
            <TextInput style={classes.input} theme={theme} mode="outlined" label="Salary" name="salary" value={salary} onChangeText={text => setForm({ salary : text})}/>
            <Button theme={ theme } style={classes.input} mode="outlined" icon="upload" onPress={(e)=>setModal(true)}>upload</Button>
            <Modal animationType="slide" visible={modal} onRequestClose={()=>{ setModal(false)}} transparent={true}>
                <View style={classes.modalContainer}>
                    <View style={classes.modal}>
                        <Button mode="outlined" icon="camera" onPress={(e)=>setModal(false)}>kamera</Button>
                        <Button mode="outlined" icon="image-area" onPress={(e)=>setModal(false)}>galeri</Button>

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
    }
})
export default FormEmploye