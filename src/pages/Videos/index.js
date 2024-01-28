import React from 'react';
import { View, ScrollView } from 'react-native';
import YouTubeIframePlayer from 'react-native-youtube-iframe';

const Videos = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
        <YouTubeIframePlayer
            height={200}
            videoId="GAEh0w6iJ7A"
            play={false}
            onChangeState={(event) => console.log(event)}
            />

        <YouTubeIframePlayer
            height={200}
            videoId="GAEh0w6iJ7A"
            play={false}
            onChangeState={(event) => console.log(event)}
            />

        <YouTubeIframePlayer
            height={200}
            videoId="GAEh0w6iJ7A"
            play={false}
            onChangeState={(event) => console.log(event)}
        />

    </ScrollView>
  );
};

export default Videos;
