import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video } from "expo-av";

import { StatusBar } from "expo-status-bar";

import {
  Octicons ,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const IconWithLabel = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      {icon}
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Video
        source={require("../img/videoFundo.mp4")}
        style={styles.video}
        isLooping
        resizeMode="cover"
        shouldPlay
        isMuted
      />

      <View style={styles.overlay}>
        <View style={styles.imgLogo}>
          <Image
              source={require("../img/DP-Logo.png")}
              style={styles.imgLogo}
              tintColor="#fff"
          />
        </View>
        
        <View style={styles.contBox}>

          <View style={styles.contIcon}>
            <IconWithLabel
              icon={<Ionicons name="person" size={40} color="#fff" />}
              label="Sobre"
              onPress={() => navigation.navigate("Sobre")}
            />

            <IconWithLabel
              icon={<Ionicons name="mic-sharp" size={40} color="#fff" />}
              label="PodCast"
              //onPress={() => navigation.navigate("PodCast")}
            />

            <IconWithLabel
              icon={
                <Ionicons name="book-outline" size={40} color="#fff" />
              }
              label="Devocional"
              //onPress={() => navigation.navigate("Videos")}
            />

            <IconWithLabel
              icon={<Octicons name="gear" size={40} color="#fff" />}
              label="Settings"
              onPress={() => navigation.navigate("Settings")}
            />

            <IconWithLabel
              icon={<MaterialIcons name="event" size={40} color="#fff" />}
              label="Agenda"
              //onPress={() => navigation.navigate("Agenda")}
            />

            <IconWithLabel
              icon={
                <MaterialCommunityIcons name="seed" size={40} color="#fff" />}
              label="Semente"
              //onPress={() => navigation.navigate("Oferta")}
            />

            <IconWithLabel
              icon={<AntDesign name="instagram" size={40} color="#fff" />}
              label="Instagram"
              onPress={() => {
                Linking.openURL(
                  "https://www.instagram.com/douglasproencaoficial/"
                );
              }}
            />

            <IconWithLabel
              icon={<Entypo name="youtube" size={40} color="#fff" />}
              label="YouTube"
              onPress={() => {
                Linking.openURL("https://www.youtube.com/@DouglasProenca");
              }}
            />

            <IconWithLabel
              icon={
                <FontAwesome5 name="telegram-plane" size={40} color="#fff" />
              }
              label="Telegram"
              onPress={() => {
                Linking.openURL("https://web.telegram.org/z/");
              }}
            />
          </View>          
        </View>

        <TouchableOpacity>
          <Image
            source={require("../img/codeLogo.png")}
            style={styles.codeLogo}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  iconContainer: {
    alignItems: "center",
  },

  iconLabel: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },

  video: {
    flex: 1,
    width: "auto",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(5, 5, 15, 0.9)",
    justifyContent: 'center',
    alignItems: 'center',
  },

  contIcon: {
    justifyContent: "space-evenly", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 70,
    top: -360,
  },

  contBox: {
    position: "relative",
    padding: 10,
    bottom: -350,
  },

  codeLogo: {
    width: 100,
    height: 50,
    bottom: -70,
  },

  //estilo Logo
  imgLogo: {
    width: 300,
    height: 130,
    top: -30,
    marginLeft: 20,
  },
});
