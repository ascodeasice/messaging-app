import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import useUserStore from '../stores/userStore'

interface OverviewProps extends NativeStackScreenProps<RootStackParamList, 'Overview'> {

}


const OverviewScreen = ({ navigation }: OverviewProps) => {
  const { user } = useUserStore();
  return (
    <View>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  )
}

export default OverviewScreen