// pages/show/show.js
var WxParse = require('../../wxParse/wxParse.js');//富文本解析
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //富文本解析
    var article = '<h1 style="font-size: 32px; font-weight: bold; border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; text-align: center; margin: 0px 0px 20px;"><span style="font-size: 18px;"><em><strong>哈喽艾瑞巴蒂</strong></em></span></h1><p style="font-size: 32px; font-weight: bold; border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; text-align: left; margin: 0px 0px 10px;"><span style="font-size: 18px;"><em><strong><span style="font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;</span></strong></em><strong><span style="font-size: 20px;">夕阳无限好<img src="http://img.baidu.com/hi/jx2/j_0013.gif" _src="http://img.baidu.com/hi/jx2/j_0013.gif"></span></strong><em><strong><span style="font-size: 20px;"><br></span></strong></em></span></p><pre class="brush:php;toolbar:false;">​<br></pre><p style="text-align: left;">大道</p>'
    WxParse.wxParse('article', 'html', article, this, 0);


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