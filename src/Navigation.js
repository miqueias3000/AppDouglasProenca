import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons  } from '@expo/vector-icons';

import Sobre from './pages/Sobre';
import Videos from './pages/Videos';
import Home from './pages/Home';
import Audios from './pages/Audios';
import PodCast from './pages/PodCast';
import Agenda from './pages/Agenda';
import Oferta from './pages/Oferta';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator         
        screenOptions={{headerShown: true}}
        initialRouteName="Home"
        >        

        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitleStyle: { alignSelf: '' }, 
            title: '', // Oculta titulo Header 
            headerTransparent: true, // Torna o fundo do cabeçalho transparente
            headerTintColor: 'white', // Define a cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold',
            },           
          })}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Sobre',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Videos"
          component={Videos}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Videos',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Audios"
          component={Audios}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Audios',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="PodCast"
          component={PodCast}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'PodCast',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'agenda',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Oferta"
          component={Oferta}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Oferta',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
