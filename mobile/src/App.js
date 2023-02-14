import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgetPassword } from './views/ForgetPassword';
import { Login } from './views/Login';
import { ResetPassword } from './views/ResetPassword';

export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{ headerShown: false}}
        >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

