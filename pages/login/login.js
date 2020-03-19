// pages/login/login.js

var app = getApp();

Page({
  loign: function () {
    var _this = this;
    wx.request({
      url: 'http://47.100.200.91/verify/',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        job_num: "18099",
        password: "Nroa18099"
      },
      success(res){
        var returnData = res.data;
        wx.setStorage({
          key: 'userInfo',
          data: returnData,
        })
        _this.setData({});
        app.globalData.loignUserInfo = res.data;
        console.log("获取用户信息成功=>"+returnData);
        wx.navigateTo({
          url: '../main/main',
        })
        wx.showToast({
          title: '登录成功',
        })
      },
      fail(res){
        wx.showToast({
          title: '登录失败'+res.errMsg,
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})