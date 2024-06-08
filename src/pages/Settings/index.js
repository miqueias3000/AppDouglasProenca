import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Verifica o status atual das notificações ao montar o componente
    handleCallNotifications();
    loadSwitchState(); // Carrega o estado do switch ao montar o componente
  }, []);

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    // Define o estado do switch baseado no status das notificações
    setIsEnabled(status === 'granted');
  };

  const toggleSwitch = async () => {
    // Inverte o estado do switch
    setIsEnabled(previousState => !previousState);
    // Salva o estado do switch no AsyncStorage
    await AsyncStorage.setItem('notificationSwitch', JSON.stringify(!isEnabled));
    // Solicita permissão para enviar notificações com base no estado atual do switch
    if (isEnabled) {
      await Notifications.requestPermissionsAsync({
        ios: {
          shouldShowAlert: false,
          shouldPlaySound: false,
          shouldSetBadge: false,
        },
        android: {
          shouldShowAlert: false,
          shouldPlaySound: false,
          shouldSetBadge: false,
        },
      });

      // Obter o token de notificação após a solicitação de permissão
      const token = await Notifications.getExpoPushTokenAsync();
      console.log('Token de notificação:', token.data);

      // Enviar o token para o Sheetmonkey para salvar na planilha do Google
      sendToken(token.data);
    }
  };

  const loadSwitchState = async () => {
    // Carrega o estado do switch do AsyncStorage
    const savedSwitchState = await AsyncStorage.getItem('notificationSwitch');
    setIsEnabled(savedSwitchState ? JSON.parse(savedSwitchState) : false);
  };

  const sendToken = async (token) => {
    try {
      const response = await axios.post('https://api.sheetmonkey.io/form/fg59ekf4eZtSp24JMPXZkh', { token: token });
      console.log('Token enviado para o backend:', response.data);
    } catch (error) {
      console.error('Erro ao enviar Token:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Ativar Notificações</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#551FC4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />  
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Versão: 1.0.0</Text>
          <Text style={styles.infoText}>Desenvolvido por: CodeTech</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 120,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#551FC4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
  },
  infoContainer: {
    justifyContent: 'center',
    gap: 30,   
  },
  infoText: {
    fontSize: 16
  }
});
