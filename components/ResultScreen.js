import React, { Component } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Button, View, ActivityIndicator, Text } from "react-native";
import { useRoute } from '@react-navigation/native';


export default function ResultScreen({ navigation }) {
  const route = useRoute();
  const qrToken = route.params.paramKey;
  // const url = `https://bop.citratubindo.com/app/training/trainingAttendance/${final_url}`;
  
  // alert(url);
    const Spinner = () => (
        <View style={styles.activityContainer}>
          <Text>Loading..</Text>
          <ActivityIndicator size="large" color={'#5040ff'} />
        </View>
    );
  return (
    <View style={{height:"100%" , width:"100%",}}>
       {/* <Text>{final_url}</Text> */}
        <WebView
        bounces={false}
        startInLoadingState={true}
        renderLoading={Spinner}
      source={{ uri: `https://silanang.com/app/pdf/pdf_export_admin/${qrToken}` }}
    />
    
   
    
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   
    },
    activityContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
      }
  });