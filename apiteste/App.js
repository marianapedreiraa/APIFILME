// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from './screens/MoviesScreen';
import MapsScreen from './screens/MapsScreen';
import LocationScreen from './screens/LocationScreen';
import DogsScreen from './screens/DogsScreen'; // Importando a nova tela

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Filmes" component={MoviesScreen} />
        <Tab.Screen name="Mapas" component={MapsScreen} />
        <Tab.Screen name="Localização" component={LocationScreen} />
        <Tab.Screen name="Cachorros" component={DogsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
