import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '@/views'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
    </Stack.Navigator>
  );
}