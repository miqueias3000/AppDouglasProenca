import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons  } from '@expo/vector-icons';

import Sobre from './pages/Sobre';
import Devocional from './pages/Devocional';
import Home from './pages/Home';
import Settings from './pages/Settings';
import PodCast from './pages/PodCast';
import Agenda from './pages/Agenda';
import Sementes from './pages/Sementes';

const Stack = createStackNavigator();

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator         
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
        }}
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
            headerTintColor: '#fff',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Devocional"
          component={Devocional}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Devocional',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTintColor: 'black',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: 'Configuração',
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
          name="Sementes"
          component={Sementes}
          options={{            
            headerTintColor: '#fff',
            headerBackTitle: 'Voltar', // Defina o texto desejado aqui
            headerTitle: '',
            headerTitleAlign: 'center',
            headerTitleStyle: { alignSelf: 'center' },
            //headerStyle: { backgroundColor: '#5f9ea0'},
            //headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
