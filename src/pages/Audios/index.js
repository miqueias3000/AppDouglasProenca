import React from "react";
import { View, Text, StyleSheet } from 'react-native'


export default function Audios () {
    return (
        <View style={styles.ContAudio}>
            <Text style={styles.text}>Audios em breve!</Text>
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