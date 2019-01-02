//
//  Metronome.m
//  SimpleMetronome
//
//  Created by Sam Parsons on 12/31/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Metronome, NSObject)
RCT_EXTERN_METHOD(pressPlay)
RCT_EXTERN_METHOD(pressStop)
RCT_EXTERN_METHOD(onSliderChange:(NSInteger *) value)
RCT_EXTERN_METHOD(prepareToPlay)
RCT_EXTERN_METHOD(onMeterChange:(NSInteger *) value)
RCT_EXTERN_METHOD(onQuarterVolumeChange:(NSInteger *) value)
RCT_EXTERN_METHOD(onEighthVolumeChange:(NSInteger *) value)
RCT_EXTERN_METHOD(onSixteenthVolumeChange:(NSInteger *) value)
@end