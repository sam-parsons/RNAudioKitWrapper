/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, Slider, View, NativeModules} from 'react-native';

console.log(NativeModules.Metronome)

export default class App extends Component {
  state = {
    "tempo": 120,
    "meter": 4,
    "quarterVolume": 50,
    "eightVolume": 0,
    "sixteenthVolume": 0,
    "quarterAccentMIDINote": 96,
    "quarterMIDINote": 88,
    "eighthMIDINote": 90,
    "sixteenthMIDINote": 92
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

  onMeterChange(value) {
    this.setState({ meter: value }, () => {
      console.log(`meter: ${this.state.meter}/4`)
      NativeModules.Metronome.onMeterChange(value)
    });
  }

  onQuarterVolumeChange(value) {
    this.setState({ quarterVolume: value }, () => {
      NativeModules.Metronome.onQuarterVolumeChange(value)
    })

  }

  onEighthVolumeChange(value) {
    this.setState({ eightVolume: value }, () => {
      console.log(value);
      NativeModules.Metronome.onEighthVolumeChange(value)
    })
  }

  onSixteenthVolumeChange(value) {
    this.setState({ sixteenthVolume: value }, () => {
      NativeModules.Metronome.onSixteenthVolumeChange(value)
    })
  }

  componentDidMount() {
    NativeModules.Metronome.prepareToPlay()
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
        <Text>Meter: {this.state.meter}/4</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={9}
          step={1}
          value={this.state.meter}
          onValueChange={(value) => {this.onMeterChange(value)}}
        />
        <Button 
          title="Play"
          onPress={this.pressPlay}
        ></Button>
        <Button
          title="Stop"
          onPress={this.pressStop}
        ></Button>
        <Text>Quarter Note Volume: {this.state.quarterVolume}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={this.state.quarterVolume}
          onValueChange={(value) => this.onQuarterVolumeChange(value)}
        />
        <Text>Eight Note Volume: {this.state.eightVolume}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={this.state.eightVolume}
          onValueChange={(value) => this.onEighthVolumeChange(value)}
        />
        <Text>Sixteenth Note Volume: {this.state.sixteenthVolume}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={this.state.sixteenthVolume}
          onValueChange={(value) => this.onSixteenthVolumeChange(value)}
        />
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
