import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Todo from './src/components/Todo';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="todo"
          component={Todo }
          options={{title: 'Todo'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

