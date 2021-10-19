import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login/Login';
import NavigationTab from './src/Components/NavigationTab/NavigationTab';
import { navigate, navigationRaf } from './src/NavigaitonRoot';
import Icons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';



const Stack  = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer ref={navigationRaf}>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen 
          name="Places" 
          component={NavigationTab} 
          options={{ 
            headerLeft: null,
            headerRight:() => (
              <TouchableOpacity onPress={() => {
                navigate("Login");
              }}>
                <Icons name="power-off" size={26} style={{ paddingRight: 10, }} />
              </TouchableOpacity>

            )
           }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

