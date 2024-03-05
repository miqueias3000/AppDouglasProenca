
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function Sobre() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View>
        <Image 
          source={require('../img/fundoApp-2.jpg')}
          style={styles.imgHead}/>
        </View>

        <View style={styles.contConteudo}>
          <Text style={styles.titleSobre}>História</Text>
          <Text style={styles.titleCont}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet veniam quos minus consequatur eligendi vero modi nesciunt totam magni pariatur atque voluptas laudantium omnis minima ipsam maiores dolorum dolorem aut ex deserunt, ab velit? Hic beatae repellat fugit odio, illo maxime incidunt? Necessitatibus culpa nam autem quod incidunt cum!

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet veniam quos minus consequatur eligendi vero modi nesciunt totam magni pariatur atque voluptas laudantium omnis minima ipsam maiores dolorum dolorem aut ex deserunt, ab velit? Hic beatae repellat fugit odio, illo maxime incidunt? Necessitatibus culpa nam autem quod incidunt cum!

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet veniam quos minus consequatur eligendi vero modi nesciunt totam magni pariatur atque voluptas laudantium omnis minima ipsam maiores dolorum dolorem aut ex deserunt, ab velit? Hic beatae repellat fugit odio, illo maxime incidunt? Necessitatibus culpa nam autem quod incidunt cum!
          </Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  contHeader: {
    top: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    position: 'relative',
    zIndex: 1,
    margin: 5,
  },

    imgHead: {
      width: 320,
      height: 270,
      position: 'relative',
    },

    contConteudo: {
      position:'relative',
      width: 300,
      backgroundColor: '#f5f5f5',
      borderRadius: 25,
      justifyContent:'center',
      alignItems:'center',
      marginLeft: 10,
      top: -15,
    },

    titleSobre: {
      fontSize: 20,
      marginLeft: 10,
      marginTop: 10,
      fontWeight: 'bold',
    },

    titleCont: {
      marginTop: 25,
      textAlign: 'justify',
      fontSize: 18,
      width: 270,
    }
}) ;
