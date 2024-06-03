import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground, ScrollView } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from "./styles";

export default function Videos() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = (state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground 
                source={require('../img/bkg.png')}
                style={styles.imgHead}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={300}
                        width={350}
                        play={playing}
                        videoId={"GAEh0w6iJ7A"}
                        onChangeState={onStateChange}
                    />
                </View>

                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={300}
                        width={350}
                        play={playing}
                        videoId={"A67L_4Eg0bc"}
                        onChangeState={onStateChange}
                    />
                </View>

                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={300}
                        width={350}
                        play={playing}
                        videoId={"sDm3HXwu3Pk"}
                        onChangeState={onStateChange}
                    />
                </View>

                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={300}
                        width={350}
                        play={playing}
                        videoId={"Pz9rcR7geOg"}
                        onChangeState={onStateChange}
                    />
                </View>

                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        height={300}
                        width={350}
                        play={playing}
                        videoId={"4bB4zE3gA1Y"}
                        onChangeState={onStateChange}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
