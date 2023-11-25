import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { RootStackParamList } from '../../App'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { FirebaseError } from 'firebase/app'
import { auth } from '../utils/firebase/firebaseConfig'

interface SignUpProps extends NativeStackScreenProps<RootStackParamList, 'SignUp'> {

}

type SignUpInput = {
  email: string;
  password: string;
}

const SignUpScreen = ({ navigation }: SignUpProps) => {
  const [input, setInput] = useState<SignUpInput>({ email: '', password: '' });
  const [errMessage, setErrMessage] = useState<string>('');

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, input.email, input.password)
      navigation.navigate('Login');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
        setErrMessage(error.message);
      }
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Create Account</Text>
      <TextInput style={styles.input} placeholder='Email' value={input.email}
        onChangeText={(value) => { setInput((prev) => ({ ...prev, email: value })) }} />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry value={input.password}
        onChangeText={(text) => { setInput((prev) => ({ ...prev, password: text })) }} />
      <Button title='    SIGN UP    ' onPress={signUp} />
      <Text style={styles.errMessage}>{errMessage}</Text>
      <Text style={styles.text}>
        Already have an account?
        <Text style={styles.link} onPress={() => { navigation.navigate('Login') }}>{` Log In`}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    marginTop: 10
  },
  link: {
    color: 'blue',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 300,
    fontSize: 16
  },
  errMessage: {
    color: 'red',
    margin: 10
  }
})

export default SignUpScreen