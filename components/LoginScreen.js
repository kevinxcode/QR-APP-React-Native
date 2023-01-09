import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [passWord, setUpassWord] = useState('');
    const onPressLearnMore = () => {
        //For generating alert on buttton click
        // alert(userName);
        navigation.replace("SCANNER APP")
    };
    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <TextInput 
                onChangeText={(userName) => setUserName(userName)} 
                value={userName} 
                placeholder={'User Name'} style={styles.input} />

            <TextInput secureTextEntry={true} placeholder={'Password'} style={styles.input} />

            <Button onPress={onPressLearnMore} title="SIGN IN" style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 25
    },
    input: {
        width: '100%',
        height: 44,
        padding: 10,
        marginTop: 8,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
    button: {
        backgroundColor: "#841584",
        width: '100%',
        margin: 8,
        padding: 10,
    }
})