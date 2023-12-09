import { View,  StyleSheet } from 'react-native'
import { Avatar, Text, Button } from 'react-native-paper'
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
      <View style={styles.profile}>
        <Avatar.Text size={36} label={user?.email?.substring(0,2)??'AN'}/>
        <Text variant='bodyLarge'>{user?.email}</Text>
      </View>
      <Button onPress={onPressSignOut} mode='contained'>LOG OUT</Button>
    </View>
  )
}

const styles=StyleSheet.create({
  profile:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    paddingVertical:10
  }
})


export default OverviewScreen