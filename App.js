/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View, NativeModules} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


console.log(NativeModules.Synth)

function pressPlay() {
  NativeModules.Synth.pressPlay()
}

function pressStop() {
  NativeModules.Synth.pressStop()
}

type Props = {
  "play": "play",
  "stop": "stop"
};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Play"
          onPress={pressPlay}
        ></Button>
        <Button
          title="Stop"
          onPress={pressStop}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});