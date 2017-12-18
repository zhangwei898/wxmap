Page({
  data: {
    showView: true
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // console.log('pppppp',options)
    showView: (options.showView == "true" ? true : false)
  }, 
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
})