//components/MyStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartMenu from '../screens/StartMenu';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="StartMenu"
          component={StartMenu}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
  );
};



export default MyStack;