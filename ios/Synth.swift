//
//  Synth.swift
//  SimpleSynth
//
//  Created by Sam Parsons on 12/30/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import AudioKit

@objc(Synth)
class Synth: NSObject {

    // AudioKit objects and data
    var sequencer = AKSequencer()
    var beep: AKOscillatorBank = AKOscillatorBank.init(waveform: AKTable(.sine), attackDuration: 0.01, decayDuration: 0.05, sustainLevel: 0.1, releaseDuration:  0.05, pitchBend: 0, vibratoDepth: 0, vibratoRate: 0)
    var beepNode: AKMIDINode?
    var callbackInst: AKMIDICallbackInstrument = AKMIDICallbackInstrument()
    var bpmValue: Int = 120
    var beepFreq: Double = 880.0
    var arrIndex: Int?
    var arrIndexSent: Int?
    let interval: TimeInterval = 0.5
    let minTaps: Int = 3
    var taps: [Double] = []
  
   
  

  
    @objc
    func constantsToExport() -> [AnyHashable: Any]! {
        return ["trackCount": 2]
    }

    @objc
    func pressPlay() {
        print("play button pressed")

        beepNode = AKMIDINode(node: beep)

        // AudioKit final set up phase
        AudioKit.output = beepNode!
        try! AudioKit.start()
      
        // instantiating metronome and callback tracks and assigning their respective i/o
        let metTrack = sequencer.newTrack()
        sequencer.tracks[0].setMIDIOutput(beepNode!.midiIn)
        let cbTrack = sequencer.newTrack()
        sequencer.tracks[1].setMIDIOutput(callbackInst.midiIn)
      
        // sequencer settings initiation
        sequencer.setLength(AKDuration(beats: 4))
        sequencer.setTempo(120)
        sequencer.enableLooping()
      
        for i in 0..<4 {
          sequencer.tracks[0].add(noteNumber: 88, velocity: 100, position: AKDuration(beats: Double(i)), duration: AKDuration(beats: 0.05))
        }
      
        // add callback tracks to sequencer
        for i in 0..<4 {
          sequencer.tracks[1].add(noteNumber: MIDINoteNumber(i), velocity: 100, position: AKDuration(beats: Double(i)), duration: AKDuration(beats: 0.05))
        }

        sequencer.play()
      
    }
  
    @objc
    func pressStop() {
    
        sequencer.stop()
      
    }
  
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

}
