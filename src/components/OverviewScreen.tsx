import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

interface OverviewProps extends NativeStackScreenProps<RootStackParamList, 'Overview'> {

}


const OverviewScreen = ({ navigation }: OverviewProps) => {
  return (
    <View>
      <Text>OverviewScreen</Text>
    </View>
  )
}

export default OverviewScreen