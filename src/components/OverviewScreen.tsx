import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import useUserStore from '../stores/userStore'
import { getAuth, signOut } from 'firebase/auth'

interface OverviewProps extends NativeStackScreenProps<RootStackParamList, 'Overview'> {

}


const OverviewScreen = ({ navigation }: OverviewProps) => {
  const { user, setUser } = useUserStore();
  const onPressSignOut = async () => {
    try {
      await signOut(getAuth());
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Text>{JSON.stringify(user)}</Text>
      <Button title='    LOGOUT   ' onPress={onPressSignOut} />
    </View>
  )
}

export default OverviewScreen