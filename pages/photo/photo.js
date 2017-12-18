Page({
  data:{
    // text:"这是一个页面"
    // avatarUrl: null,
    avatarUrlArr: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: ''
   
    },
    avatarUrlArr1: {
     0:'',
     1: '',
     2: '',
     3: '',
     4: '',
     5: '',
     6: '',
     7: ''
    }
  },
  //调用image接口1
  gotoShow1: function (event) {
    console.log(event);
    var id = event.currentTarget.id;
    var that = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 获取成功,将获取到的赋值给临时变量
        var tempFilePaths = res.tempFilePaths;
        console.log("66", tempFilePaths);
        var tempAvatarUrlArr = that.data.avatarUrlArr1;
        //获取到的地址存到Arr中
        tempAvatarUrlArr[id] = tempFilePaths[0];
        console.log(tempAvatarUrlArr);
        that.setData({
          //将临时变量赋值给已经在data中定义好的变量
          avatarUrl: tempFilePaths,
          avatarUrlArr1: tempAvatarUrlArr
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  //调用image接口2
  gotoShow: function (event) {
    console.log(event);
    var id = event.currentTarget.id;
    var that = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 获取成功,将获取到的赋值给临时变量
        var tempFilePaths = res.tempFilePaths;
           console.log("999",tempFilePaths);
        var tempAvatarUrlArr = that.data.avatarUrlArr;
        //获取到的地址存到Arr中
        tempAvatarUrlArr[id] = tempFilePaths[0];
        console.log(tempAvatarUrlArr);
        that.setData({
          //将临时变量赋值给已经在data中定义好的变量
          // avatarUrl: tempFilePaths,
          avatarUrlArr: tempAvatarUrlArr
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
})
