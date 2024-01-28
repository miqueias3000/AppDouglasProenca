import { useState } from 'react';
import React from 'react';
import Navigation from './src/Navigation';
import { SplashScreen } from './src/componentes/SplashScreen';

import { preventAutoHideAsync} from 'expo-splash-screen';

preventAutoHideAsync();


export default App = () => {

  const [splashComplete, setSplashComplete] = useState(false);

  return (
    splashComplete
    ? <Navigation/>
    : <SplashScreen onComplete={setSplashComplete} />
  );
};
