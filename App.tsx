import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import OverviewScreen from './src/components/OverviewScreen';
import { User, getAuth } from 'firebase/auth';
import useUserStore from './src/stores/userStore';
import { useEffect } from 'react';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Overview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { user, setUser } = useUserStore();


  const onAuthStateChanged = (user: User | null) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ?
          (
            <>
              <Stack.Screen name="Overview" component={OverviewScreen} />
            </>
          ) :
          (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
