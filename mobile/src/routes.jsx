import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgetPassword } from './views/ForgetPassword';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { ResetPassword } from './views/ResetPassword';

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{ headerShown: false}}
        >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
}