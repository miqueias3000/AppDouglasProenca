import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Oferta () {
    return (
        <View style={styles.ContAudio}>
            <Text style={styles.text}>Oferta em breve!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    ContAudio: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },  

});

