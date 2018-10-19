//
//  ExampleInterface.h
//  LearnRN
//
//  Created by LeGuo on 9/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h> // 导入这个头文件以实现RCTBridgeModule协议
#import <React/RCTBridge.h> // 导入这个头文件用来实现向React Native发送事件
#import <React/RCTEventDispatcher.h> // 导入这个头文件用来实现向React Native发送事件

@interface ExampleInterface : NSObject<RCTBridgeModule>
@property(nonatomic, strong) NSString *contactName; // 用来保存所挑选的联系人姓名
@property(nonatomic, strong) NSString *contactPhoneNumber; // 用来保存所挑选的联系人电话号码
@end
