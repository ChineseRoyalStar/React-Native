//
//  RNFLAnimatedImageManager.m
//  LearnRN
//
//  Created by LeGuo on 11/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RNFLAnimatedImageManager.h"
#import "RNFLAnimatedImage.h"
#import <React/RCTBridge.h>

@implementation RNFLAnimatedImageManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view {
  return [[RNFLAnimatedImage alloc] initWithEventDispatcher: self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(src, NSString);
RCT_EXPORT_VIEW_PROPERTY(contentMode, NSNumber)
- (NSArray *)customDirectEventTypes {
  return @[@"onFrameChange"];
}

- (NSDictionary *)constantsToExport {
  return @{@"ScaleAspectFit": @(UIViewContentModeScaleAspectFit),
           @"ScaleAspectFill":@(UIViewContentModeScaleAspectFill),
           @"ScaleToFill":@(UIViewContentModeScaleToFill)};
}
@end
