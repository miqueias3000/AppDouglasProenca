import React, { useState } from "react";
import { View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

export default function Videos() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = (state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <YoutubePlayer
                    style={styles.video}
                    height={300}
                    width={350}
                    play={playing}
                    videoId={"GAEh0w6iJ7A"}
                    onChangeState={onStateChange}
                />

                <YoutubePlayer
                    style={styles.video}
                    height={300}
                    width={350}
                    play={playing}
                    videoId={"A67L_4Eg0bc"}
                    onChangeState={onStateChange}
                />

                <YoutubePlayer
                    style={styles.video}
                    height={300}
                    width={350}
                    play={playing}
                    videoId={"sDm3HXwu3Pk"}
                    onChangeState={onStateChange}
                />

                <YoutubePlayer
                    style={styles.video}
                    height={300}
                    width={350}
                    play={playing}
                    videoId={"Pz9rcR7geOg"}
                    onChangeState={onStateChange}
                />

                <YoutubePlayer
                    style={styles.video}
                    height={300}
                    width={350}
                    play={playing}
                    videoId={"4bB4zE3gA1Y"}
                    onChangeState={onStateChange}
                />
            </ScrollView>
        </View>
    );
}
