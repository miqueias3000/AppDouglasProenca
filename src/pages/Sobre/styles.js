import { StyleSheet } from "react-native";

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

  export default styles