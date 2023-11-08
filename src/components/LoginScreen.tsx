import React from 'react'
import { Button, Text, View } from 'react-native'
import type { RootStackParamList } from '../../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface LoginProps extends NativeStackScreenProps<RootStackParamList,'Login'>{
}

const LoginScreen = ({navigation}:LoginProps) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Sign Up' onPress={() => { navigation.navigate('SignUp') }}/>
    </View>
    )
}

export default LoginScreen