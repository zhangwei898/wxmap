//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //get locationInfo
  getLocationInfo: function (cb) {
    var that = this;
    if (this.globalData.locationInfo) {
      cb(this.globalData.locationInfo)
    } else {
      wx.getLocation({
        type: 'wgs84', 
        success: function (res) {
          that.globalData.locationInfo = res;
          cb(that.globalData.locationInfo)
        },
        fail: function () {
      
        },
        complete: function () {
  
        }
      })
      //显示当前位置不显示周边位置
      // wx.getLocation({
      //   type: 'wgs84',
      //   success: function (res) {
      //     var latitude = res.latitude
      //     var longitude = res.longitude
      //     var speed = res.speed
      //     var accuracy = res.accuracy
      //   }
      // })
    }
  },
  globalData: {
    userInfo: null,
    locationInfo: null,
    info:"我的test11"
  }
})