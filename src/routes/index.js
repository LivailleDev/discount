import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'My Cart'
        }}
      />
    </Stack.Navigator>
  )
}
 