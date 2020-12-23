import React from 'react';
import PokeDate from './context/PokeDate';
import Main from './pages/Main';
import PokeDetails from './pages/PokeDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PokeCard from './components/PokeCard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PokeDate>
        <Stack.Navigator initialRouteName={Main}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="PokeCard" component={PokeCard} />
          <Stack.Screen name="PokeDetails" component={PokeDetails} />
        </Stack.Navigator>
      </PokeDate>
    </NavigationContainer>
  );
}

export default App;
