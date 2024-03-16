import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Seed () {
    return (
        <View style={styles.ContAudio}>
            <Text style={styles.text}>Sementes em breve!</Text>
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