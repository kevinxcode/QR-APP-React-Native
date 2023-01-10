import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const isLogin = true;


export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [passWord, setUpassWord] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [loginArray, setData] = useState([]);

    const login = () => {
        setIsLoading(true);
        fetch('https://fadeshare.com/react/api//login', {
        method: 'post',
        header: {
             Accept: 'application/json',
             'Content-type': 'application/json',
            },
        body: JSON.stringify({
            userName: userName,
            passWord: passWord,
        }),
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .then((responseJson) => {
            if (responseJson == 'Gagal') {
                // redirect to profile page
                alert('Wrong Login Details');
                // this.props.navigation.navigate('Profile');
            } else {
                alert('Login Success');
                setIsLoading(true);
                navigation.replace("HOME")
               
            }
            setIsLoading(false);
            })
            .catch((error) => {
                 console.error(error);
            });
        };
    
    // const onPressLearnMore = () => {
    //     //For generating alert on buttton click
    //     // alert(userName);
    //     navigation.replace("SCANNER APP")
    // };
    return (
        <View style={styles.container}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      
           <Text>LOGIN</Text>
            <TextInput 
                onChangeText={(userName) => setUserName(userName)} 
                value={userName} 
                placeholder={'User Name'} style={styles.input} />

            <TextInput 
                secureTextEntry={true}
                onChangeText={(passWord) => setUpassWord(passWord)} 
                value={passWord} 
                placeholder={'Password'} style={styles.input} />

        {isLoading ? (
             <Button title="LOADING.." style={styles.button} />
        ) : (
            <Button onPress={login}  title="SIGN IN" style={styles.button} />
        )}

        {/* <FlatList
            data={loginArray}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => 
                <Text>{item.name} </Text>
            }
          /> */}
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
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
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignItems: "center",
        margin: 20,
     },
})