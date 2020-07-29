import React, { useState } from 'react';
import { TextField } from 'react-native-material-textfield';
import { View, Button, Pressable } from 'react-native';
import firebase from 'react-native-firebase';
export default SendOtp = () => {
    const [phone, setPhone] = useState('')

    const [errorPhone, setErrorPhone] = useState()

    const handleSendCode = () => {
        if (phone.length === 0) {
            setErrorPhone("Please enter phone number.")
        } else {
            firebase
                .auth()
                .signInWithPhoneNumber(phone)
                .then(confirmResult => {
                    console.log("confirmResult",confirmResult)
                })
                .catch(error => {
                    alert(error.message)
                    console.log(error)
                })
        }
    }

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', padding: 20, }}>

            <TextField
                label='Phone number'
                keyboardType='phone-pad'
                ref={this.fieldRef}
                defaultValue={phone}
                error={errorPhone}
                onChangeText={(text) => {
                    setErrorPhone(null)
                    setPhone(text)
                }}
            />
            <Button
                onPress={() => { handleSendCode() }}
                title="Send Code" />
        </View>
    )


}