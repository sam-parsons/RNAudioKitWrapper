/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, Slider, View, NativeModules} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

console.log(NativeModules.Metronome)


type Props = {};
export default class App extends Component<Props> {
  state = {
    "tempo": 120
  }

  pressPlay() {
    NativeModules.Metronome.pressPlay()
  }

  pressStop() {
    NativeModules.Metronome.pressStop()
  }

  onSliderChange(value) {
    console.log("tempo is: " + value);
    this.setState({ tempo: value })
    NativeModules.Metronome.onSliderChange(value)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tempo: {this.state.tempo}</Text>
        <Slider
          style={styles.slider}
          minimumValue={30}
          maximumValue={300}
          step={1}
          value={this.state.tempo}
          onValueChange={(value) => {this.onSliderChange(value)}}
        />
        <Button 
          title="Play"
          onPress={this.pressPlay}
        ></Button>
        <Button
          title="Stop"
          onPress={this.pressStop}
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
  slider: {
    width: 240,
  }
});
