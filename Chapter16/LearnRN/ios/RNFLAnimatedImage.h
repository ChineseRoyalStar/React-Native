//
//  RNFLAnimatedImage.h
//  LearnRN
//
//  Created by LeGuo on 11/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTView.h>
#import <FLAnimatedImage/FLAnimatedImage.h>
@class RCTEventDispatcher;
@interface RNFLAnimatedImage : UIView
@property(nonatomic, copy) NSString *src;
@property(nonatomic, strong) NSNumber *contentMode;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispather
NS_DESIGNATED_INITIALIZER;
@end
