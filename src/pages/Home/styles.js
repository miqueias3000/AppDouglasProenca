import { StyleSheet } from "react-native";

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
      bottom: -55,
    },
  
    //estilo Logo
    imgLogo: {
      width: 300,
      height: 130,
      top: -20,
      marginLeft: 20,
    },
  });

  export default styles