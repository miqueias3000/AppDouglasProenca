
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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
            Douglas Proença, casado há 24 anos com Pamela Proença , pai de Kamilly Evilin, 
            apaixonadamente engajado no chamado pastoral há mais de 23 anos. Atualmente como Pastor Sênior na Fé e Graça Church em Assis, SP.
            Fundador do Ministério Fé e Graça e também  da OBG RAIZ , 
            Formado pelo Rhema Brasil, o maior centro de treinamento bíblico do mundo em Tulsa, Oklahoma, EUA.  
          </Text>
          <Text style={styles.titleCont}>
            Coach Leader, Self Coach, e Analista Comportamental pelo Instituto IBC, integro as melhores 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f184b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  imgHead: {
    width: 400,
    height: 200,
    position: 'relative',
  },

  contConteudo: {
    width: 360,
    height: 800,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    top: 20,
    marginBottom: 20,
  },

  titleSobre: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  titleCont: {
    marginTop: 8,
    fontSize: 17,
    width: 270,
  },

  iconContainer: {
    alignItems: "center",
  },

  iconLabel: {
    color: "#fff",
    marginTop: 1,
    fontSize: 12,
    textAlign: "center",
  },

  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 50,
    gap: 20,
  },
});
