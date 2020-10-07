

import React from 'react';
import {SafeAreaView,TouchableOpacity, Button, View,Text,Image, StyleSheet,TextInput,onPress, ImageBackground} from 'react-native'


const App = () => {

  return (
    <SafeAreaView style = {{backgroundColor : "#e0e0eb" , flex : 1}}>

        <View style = {styles.navbar}>
          <Text style = {styles.navbarText}>HOME</Text>
          <Text style = {styles.navbarText}>ABOUT</Text>
          <Text style = {styles.navbarText}>SERVICES</Text>
          <Text style = {styles.navbarText}>LMS</Text>
          <Text style = {styles.navbarText}>HELP</Text>
        </View>

        <View style ={styles.head}>
            <Image style = {{width: 380, height: 150,resizeMode:'contain' }}  source={require("./img/logo.png")}/> 
            <Text style ={styles.headTitle}>Change your skillset, change your future!</Text>
        </View>

        <View style = {{flex : 1}}>
        
        <View style ={styles.title1}>
          <TextInput keyboardType="email-address"
            placeholder="Kullanıcı adı giriniz... (örn :  E2333-Adem )"/>
        </View>     

        <View style ={styles.title2}>
          <TextInput keyboardType="email-address"
            placeholder="Şifre giriniz..."/>
        </View>     
        </View>
        <View style = {{flex : 1}}>
        <TouchableOpacity  onPress={onPress} >
          <View style={styles.buttonContainer1}>
            <Text style={styles.textStyle}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
      
        <TouchableOpacity  onPress={onPress} >
        <View style={styles.buttonContainer2}>
            <Text style={styles.textStyle}>Kayıt Ol</Text>
          </View>
        </TouchableOpacity>

         <View style={styles.textStyle3}>
          <Text style={styles.textStyle2}>Clarusway Web Design, Copyright © 2020</Text>   
        </View>  
      
        </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  head : {
      flex : 1,
      justifyContent : "center", 
      alignItems : "center",
      // marginLeft : 10,
      marginBottom : 60,
    },
    navbar : {
     marginTop : 5,
      flexDirection : "row",
      justifyContent : "space-around", 
      alignItems : "center",
   
      
    },
    navbarText : {
     fontWeight : "bold",
     borderBottomWidth : 1,
     fontSize: 13
      
    },
    headTitle : {
      // fontFamily: "SFUIDisplay-Bold",
      marginTop : -15,
      // fontWeight: "bold" ,
      fontSize : 14,
      fontStyle : "italic"
    },
    title1 : {
        // flex : 1,
        borderColor: 'gray',
        backgroundColor : "white",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        padding : 3,
        marginBottom : 20,
    },
    title2 : {
      // flex : 1,
      backgroundColor : "white",
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 20,
      marginRight: 20,
      margin : 3,
      padding : 3,
  },
    buttonContainer1: {
      backgroundColor: 'rgb(169, 80, 139)', 
      padding: 10,
      marginLeft: 70,
      marginRight: 70,
      marginBottom : 30,
      borderRadius: 15,
      alignItems: 'center'
    },
    buttonContainer2: {
      backgroundColor: 'rgb(169, 80, 139)', 
      padding: 10,
      marginLeft: 70,
      marginRight: 70,
      borderRadius: 15,
      alignItems: 'center'
    },
    
    textStyle: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    },
    textStyle2: {
      fontSize: 13,
      color: 'white',
      textAlign : "center", 
      alignItems : "flex-end",
      color : "black",
    },
    textStyle3: {
      flex : 1,
      justifyContent : "flex-end", 
      alignItems : "center",
      marginBottom : 10,
  
      // fontWeight: 'bold'
    }
})