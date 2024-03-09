import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios';

const Devocional = () => {
  // Set para armazenar o conteúdo da requisição
  const [devocional, setDevocional] = useState([]);

  // Função para fazer a busca no back-end
  // Executa apenas uma vez no carregamento inicial
  useEffect(() => {
    const fetchDevocional = async () => {
      try {
        const response = await axios.get('EndPoint da Sua API');
        setDevocional(response.data);
      } catch (error) {
        console.error('Erro ao buscar Devocional:', error);
      }
    };

    // Faz a consulta ao back-end a cada 5 segundos
    const intervalId = setInterval(fetchDevocional, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <FlatList
        data={devocional}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    marginVertical: 5
  }
});

export default Devocional;
