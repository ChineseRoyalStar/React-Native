//
//  RNFLAnimatedImage.h
//  LearnRN
//
//  Created by LeGuo on 11/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "React/RCTEventDispather.h"
#import "React/RCTView.h"
#import "RNFLAnimatedImage.h"
@class RCTEventDispatcher;
@interface RNFLAnimatedImage : UIView
@property(nonatomic, assign) NSString *src;
@property(nonatomic, assign) NSNumber *contentMode;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispather
NS_DESIGNATED_INITIALIZER;
@end
