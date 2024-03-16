import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      //marginTop: 120,
      alignItems: 'center',
      backgroundColor: '#690BB7',
    },
    imgHead: {
        width: 395,
        height: 120,
        position: 'relative',
        marginBottom: 15,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 15,
      padding: 10,
      elevation: 2,
      marginBottom: 20,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#690BB7',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalTitle: {
      color: '#000',
      textAlign: 'auto',
      fontWeight: 'bold',
      marginBottom: 15,
      fontSize: 18
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'auto',
    },
    imageButton: {
      marginBottom: 20,
    },
    image: {
      width: 340,
      height: 160,
      borderRadius: 15,
    },
    tituloCard:{
      position: 'absolute',
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      padding: 20,
      marginTop: 50,
    },
  });

  export default styles