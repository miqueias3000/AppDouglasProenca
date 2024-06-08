import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, ImageBackground, Animated, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const IconWithLabel = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      {icon}
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function Sobre() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground 
            source={require('../img/fundoApp-2.jpg')}
            style={styles.imgHead}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contConteudo}>
          <Text style={styles.titleSobre}>Sobre Douglas Proença</Text>
          <Text style={styles.titleCont}>
            Douglas Proença, casado há 24 anos com Pamela Proença , pai de Kamilly Evelin, 
            apaixonadamente engajado no chamado pastoral há mais de 23 anos. Atualmente como Pastor Sênior na Fé e Graça Church em Assis, SP.
            Fundador do Ministério Fé e Graça e também  da ONG RAIZ , 
            Formado pelo Rhema Brasil, o maior centro de treinamento bíblico do mundo em Tulsa, Oklahoma, EUA.  
          </Text>
          <Text style={styles.titleCont}>
            Coach Leader, Self Coach, e Analista Comportamental pelo Instituto IBC, apto as melhores 
            práticas de liderança e desenvolvimento pessoal à missão pastoral, guiando outros a atingirem seu potencial. 
            Autor do  livro VOCÊ NASCEU PARAR DAR CERTO!
          </Text>
          <Text style={styles.titleCont}>
            Fundador da ESCOFEG, o Centro de Ensino Teológico Avançado, preparo líderes e discípulos com sólido conhecimento 
            bíblico e aplicação prática. Nossa visão é formar indivíduos equipados com sabedoria, fé e habilidades de liderança,
          </Text> 
          <Text style={styles.titleCont}>
            prontos para fazer a diferença no mundo com o amor e a graça de Deus.
          </Text>
        </View>
        <Text style={{color: '#fff', fontSize: 18, marginBottom: 15, marginTop: 20, marginLeft: 15,}}>Rede Social</Text>
        <View style={styles.social}>          
          <IconWithLabel
            icon={<AntDesign name="instagram" size={40} color="#f20089" />}
            label="Instagram"
            onPress={() => {
              Linking.openURL(
                "https://www.instagram.com/douglasproencaoficial/"
              );
            }}
          />
          <IconWithLabel
            icon={
              <FontAwesome5 name="telegram-plane" size={40} color="#26A2E0" />
            }
            label="Telegram"
            onPress={() => {
              Linking.openURL("https://web.telegram.org/z/");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

