import { useState } from 'react';
import { StyleSheet } from "react-native";
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import { hideAsync } from 'expo-splash-screen'

type props = {
    onComplete: (status: boolean) => void;
}

export function SplashScreen({onComplete}: props) {

    const [lastStatus, setStatus] = useState<AVPlaybackStatus>( {} as AVPlaybackStatus);

    function onPlaybackStatusUpdate( status: AVPlaybackStatus) {
        if(status.isLoaded){
            //verifica se o video terminou ou não 
            if(lastStatus.isLoaded !== status.isLoaded){
                hideAsync();
            }
            if(status.didJustFinish){
                onComplete(true);
            }
        }
    }

    return(
        <Video
        style={StyleSheet.absoluteFill}//faz com que a imagem pegue a tela toda
        resizeMode={ResizeMode.COVER}
        source={require('../../assets/splash.mp4')}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}//esse modo acompanha o status do Video
        shouldPlay={true}
        />
    )
};