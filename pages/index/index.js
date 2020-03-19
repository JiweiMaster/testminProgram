//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
 
  onLoad: function () {
    //判断本地是否有用户信息
    // wx.getStorage({
    //   key: 'userInfo',
    //   success: function(res) {
    //     //导航去下个界面
    //     wx.navigateTo({
    //       url: '../main/main',
    //       success: function(){
    //         //全局变量赋值
    //         app.globalData.loignUserInfo = JSON.parse(JSON.stringify(res.data));
    //         console.log("index=>"+app.globalData.loignUserInfo);
    //       },
    //       fail: function(res){
    //         console.log("跳转到主页失败=>"+res);
    //       }
    //     })
    //   },
    //   fail: function(res){
    //     wx.navigateTo({
    //       url: '../login/login',
    //       success: function (res) { },
    //       fail: function (res) { },
    //       complete: function (res) { },
    //     })
    //     console.log("token已经过期");
    //   }
    // })
  }
})
