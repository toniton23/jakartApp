import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Homepage,
  Ancolpage,
  Transportasipage,
  Bantuanpage,
  Wisatapage,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wisata"
        component={Wisatapage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transportasi"
        component={Transportasipage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bantuan"
        component={Bantuanpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ancol"
        component={Ancolpage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
