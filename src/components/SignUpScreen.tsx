import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { RootStackParamList } from '../../App'

interface SignUpProps extends NativeStackScreenProps<RootStackParamList,'SignUp'>{

}

type SignUpInput={
  username:string;
  password:string;
}

const SignUpScreen = ({navigation}:SignUpProps) => {
  const [input, setInput] = useState<SignUpInput>({username:'',password:''});

  const signUp = () => {
    // TODO: sign up
    console.log(input);
   }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Create Account</Text>
      <TextInput style={styles.input} placeholder='Username' value={input.username}
       onChangeText={(value) => { setInput((prev) => ({...prev,username:value})) }}/>
      <TextInput style={styles.input} placeholder='Password'secureTextEntry value={input.password}
      onChangeText={(text) => { setInput((prev) => ({...prev,password:text})) }}/>
      <Button title='    SIGN UP    ' onPress={signUp}/>
      <Text style={styles.text}>
        Already have an account?
        <Text style={styles.link} onPress={() => { navigation.navigate('Login') }}>{` Log In`}</Text>
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

export default SignUpScreen