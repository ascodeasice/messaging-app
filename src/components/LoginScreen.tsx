import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-paper'
import type { RootStackParamList } from '../../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import useUserStore from '../stores/userStore'

interface LoginProps extends NativeStackScreenProps<RootStackParamList, 'Login'> {
}

type LoginInput = {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation }: LoginProps) => {
  const [input, setInput] = useState<LoginInput>({ email: '', password: '' });
  const [errMessage, setErrMessage] = useState<string>('');
  const { setUser } = useUserStore()

  const login = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password)
      setUser(userCredential.user);
      navigation.navigate('Overview');
    } catch (error) {
      setErrMessage('Wrong email/password')
      console.error(error);
    }
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Login to Message Man</Text>
      <TextInput style={styles.input} placeholder='Email' value={input.email}
        onChangeText={(value) => { setInput((prev) => ({ ...prev, email: value })) }} />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry value={input.password}
        onChangeText={(text) => { setInput((prev) => ({ ...prev, password: text })) }} />
      <Button mode='contained' onPress={login}>LOGIN</Button>
      <Text style={styles.errMessage}>{errMessage}</Text>
      <Text style={styles.text}>
        Don't have an account?
        <Text style={styles.link} onPress={() => { navigation.navigate('SignUp') }}>{` Sign Up`}</Text>
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


export default LoginScreen