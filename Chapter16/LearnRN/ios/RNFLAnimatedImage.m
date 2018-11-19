//
//  RNFLAnimatedImage.m
//  LearnRN
//
//  Created by LeGuo on 11/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNFLAnimatedImage.h"
#import <Foundation/Foundation.h>
#import <FLAnimatedImage/FLAnimatedImageView.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>
#import <React/UIView+React.h>
#import <React/RCTLog.h>

@implementation RNFLAnimatedImage {
  RCTEventDispatcher *_eventDipatcher;
  FLAnimatedImage *_image;
  FLAnimatedImageView *_imageView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispather {
  if((self = [super init])) {
    _eventDipatcher = eventDispather;
    _imageView = [[FLAnimatedImageView alloc] init];
    
    [_imageView addObserver:self forKeyPath:@"currentFrameIndex" options:0 context:nil];
  }
  return self;
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context {
  if (object == _imageView) {
    if ([keyPath isEqualToString:@"currentFrameIndex"]) {
      [_eventDipatcher sendInputEventWithName:@"onFrameChange" body:@{
                                                                      @"currentFrameIndex":[NSNumber numberWithUnsignedInteger:[_image frameCount]],@"target":self.reactTag
                                                                      }];
    }
  }
}
       
- (void)removeFromSuperview {
  [_imageView removeObserver:self forKeyPath:@"currentFrameIndex"];
  _eventDipatcher = nil;
  [super removeFromSuperview];
}
       
- (void)reloadImage {
  _image = [FLAnimatedImage animatedImageWithGIFData:[NSData dataWithContentsOfURL:[NSURL URLWithString:_src]]];
  _imageView .contentMode = [_contentMode integerValue];
  _imageView.animatedImage = _image;
}

- (void)layoutSubviews {
  _imageView.frame = self.bounds;
  [self addSubview:_imageView];
}

- (void)setSrc:(NSString *)src {
  if (![src isEqual:_src]) {
    _src = src;
    [self reloadImage];
  }
}

- (void)setContentMode:(NSNumber *)contentMode {
  if (![contentMode isEqual:_contentMode]) {
    _contentMode = contentMode;
    [self reloadImage];
  }
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
