import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Homepage,
  Ancolpage,
  Transportasipage,
  Bantuanpage,
  Wisatapage,
  Tamsurpage,
  Tamenpage,
  Tamkodpage,
  Musgajpage,
  Kotupage,
  Muslaypage,
  Pancolpage,
  Tidungpage,
  Krlpage,
  Mrtpage,
  Transpage,
} from '../pages';
import Muslay from '../pages/Muslaypage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trans"
        component={Transpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mrt"
        component={Mrtpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Krl"
        component={Krlpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulau Tidung"
        component={Tidungpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulau Bidadari"
        component={Pancolpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Museum Layang-layang"
        component={Muslaypage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kota Tua"
        component={Kotupage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Museum Gajah"
        component={Musgajpage}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name="Taman Menteng"
        component={Tamenpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Taman Kodok"
        component={Tamkodpage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Taman Suropati"
        component={Tamsurpage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
