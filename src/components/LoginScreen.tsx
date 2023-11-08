import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import type { RootStackParamList } from '../../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface LoginProps extends NativeStackScreenProps<RootStackParamList,'Login'>{
}

const LoginScreen = ({navigation}:LoginProps) => {

  const login = () => {
    // TODO
    console.log("TODO: login")
   }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Login to Message Man</Text>
      <TextInput style={styles.input} placeholder='Username'/>
      <TextInput style={styles.input} placeholder='Password'secureTextEntry/>
      <Button title='    LOGIN    ' onPress={login}/>
      <Text style={styles.text}>
        Don't have an account?
        <Text style={styles.link} onPress={() => { navigation.navigate('SignUp') }}>{` Sign Up`}</Text>
      </Text>
    </View>
    )
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  heading:{
    fontSize:30,
    textAlign:'center',
    marginBottom:10
  },
  text:{
    textAlign:'center',
    marginTop:10
  },
  link:{
    color:'blue',
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    padding:10,
    margin:10,
    width:300,
    fontSize:16
  }
})


export default LoginScreen