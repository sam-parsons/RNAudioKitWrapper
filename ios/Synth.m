//
//  Synth.m
//  SimpleSynth
//
//  Created by Sam Parsons on 12/30/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Synth, NSObject)
RCT_EXTERN_METHOD(pressPlay)
RCT_EXTERN_METHOD(pressStop)
@end
