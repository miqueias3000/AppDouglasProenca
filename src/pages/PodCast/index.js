import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function PodCast () {
    return (
        <View style={styles.ContAudio}>
            <Text style={styles.text}>PodCast em breve!</Text>
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

