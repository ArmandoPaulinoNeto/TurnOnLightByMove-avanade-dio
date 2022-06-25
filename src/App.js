import React, {useState, useEffect} from 'react';
import { SafeAreaView, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import shake from 'react-native-shake';

import lightOff from './assets/icons/eco-light-off.png';
import light from './assets/icons/eco-light.png';
import dio from './assets/icons/logo-dio.png';
import dioWhite from './assets/icons/logo-dio-white.png';

const App = () => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => { Torch.switchState(toggle); }, [toggle]);

  useEffect(() => {
    const subSription = shake.addListener(handleChandeStatus);
    return () => subSription.remove();
  }, []);

  const handleChandeStatus = () => setToggle(oldToggle => !oldToggle);

  return (
            <SafeAreaView style={[style.container, toggle ? style.bgLight: style.bgDark]}>
              <TouchableOpacity onPress={handleChandeStatus}>
                <View>                
                  <Image style={style.lightDefault} source={toggle ? light : lightOff}/>
                  <Image style={style.lightDefault} source={toggle ? dio : dioWhite}/>                
                </View>
              </TouchableOpacity>              
            </SafeAreaView>
          );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgLight: {
    backgroundColor: 'white',
  },
  bgDark: {
    backgroundColor: 'black',
  },
  lightDefault:{
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
});