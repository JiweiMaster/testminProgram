// pages/main/main.js
//获取应用实例
var app = getApp();
var util = require("../../utils/util.js")

Page({
  loginUserInfo: null,
  /**
   * 页面的初始数据
   */
  data: {
    array: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    this.loginUserInfo = app.globalData.loignUserInfo;
    var reg1 = RegExp("</?[^>]+>", "");
    // var reg2 = RegExp("<a>\\s*|\t|\r|\n</a>", "");
    // var reg3 = RegExp("\n", "");
    util.print("token=》" + app.globalData.loignUserInfo.token);
    //获取服务器数据
    wx.request({
      url: app.globalData.baseUrl+'/answer?page=1',
      header: { token: app.globalData.loignUserInfo.token},
      success(res){
        if(res.statusCode == 200){
          var returnData = res.data;
          var arrayData = res.data.results;
          for (var i in arrayData) {
            arrayData[i].content = arrayData[i].content.replace(/<[^>]+>/g, "").replace("\n", "");
            arrayData[i].add_time = arrayData[i].add_time.split(" ")[0];
          }
          _this.setData({ array: returnData.results });
          this.array = returnData.results;
        }
        if(res.statusCode == 403){
          util.print("token过期");
          //删除本地的token数据
          wx.setStorage({
            key: 'userInfo',
            data: '',
            success: function(){
              util.print("数据删除成功");
            },
            fail: function(){
              util.print("数据删除失败");
            }
          })
          wx.navigateTo({
            url: '../login/login',
          })
        }
      },
      fail(res){
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    util.toast("监听到用户上拉触底");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})