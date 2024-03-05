import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import YouTubeIframePlayer from 'react-native-youtube-iframe';

const Devocional = () => {
  return (
    <View style={styles.ContVideos}>
      <Text style={styles.text}>Devocional em breve!</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  ContVideos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
},
});

export default Devocional;
