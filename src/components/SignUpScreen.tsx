import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../../App'

interface SignUpProps extends NativeStackScreenProps<RootStackParamList,'SignUp'>{

}


const SignUpScreen = ({navigation}:SignUpProps) => {
  return (
    <View>
      <Text>Sign up</Text>
      <Button title='Log In' onPress={() => { navigation.navigate('Login') }}/>
    </View>
    )
}

export default SignUpScreen