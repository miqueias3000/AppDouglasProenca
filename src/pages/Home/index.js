import React from "react";
import { View, Text, TouchableOpacity, Linking, Image, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video } from "expo-av";
import styles from "./styles";

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
              onPress={() => navigation.navigate("Devocional")}
            />

            <IconWithLabel
              icon={<Octicons name="gear" size={40} color="#fff" />}
              label="Settings"
              onPress={() => navigation.navigate("Settings")}
            />

            <IconWithLabel
              icon={<AntDesign name="playcircleo" size={40} color="#fff" />}
              label="Videos"
              onPress={() => navigation.navigate("Videos")}
            />

            <IconWithLabel
              icon={
                <MaterialCommunityIcons name="seed" size={40} color="#fff" />}
              label="Sementes"
              //onPress={() => navigation.navigate("Seed")}
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
