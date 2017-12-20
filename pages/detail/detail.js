// 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    winWidth: 0,
    winHeight: 0, 
    tabs: ["信息管理", "照片管理"],
    activeIndex: 0,
    sliderOffset:0,
    sliderLeft:40,
    hidden: true,
    avatarUrlArr: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: ''
    },
    avatarUrlArr1: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: ''
    },
    dwData: [
     {
       "eleId": "站点信息",
       "eleName": "站点信息",
       "eleType": "组",
       "isRequired": "",
       "controlType": "",
       "autoFillOption": "",
       "subContent": "",
       "defaultValue": "",
       "tipInfo": ""
     },
     {
       "eleId": "标题",
       "eleName": "站名",
       "eleType": "元素",
       "isRequired": "是",
       "controlType": "文本框",
       "autoFillOption": "",
       "subContent": "",
       "defaultValue": "",
       "tipInfo": ""
     },
     {
        "eleId": "需求方",
        "eleName": "运营商需求方",
        "eleType": "元素",
        "isRequired": "是",
        "controlType": "下拉列表-单选",
        "autoFillOption": "",
        "subContent": "电信,移动,联通,铁塔,移动+电信,联通+电信,移动+联通,移动+联通+电信,其他",
        "defaultValue": "",
        "tipInfo": ""
      },
      {
        "eleId": "资源方",
        "eleName": "原运营商归属",
        "eleType": "元素",
        "isRequired": "是",
        "controlType": "下拉列表-复选",
        "autoFillOption": "",
        "subContent": "铁塔,电信,移动,联通,其他",
        "defaultValue": "",
        "tipInfo": ""
      },
      {
        "eleId": "需求批次",
        "eleName": "需求批次",
        "eleType": "元素",
        "isRequired": "是",
        "controlType": "下拉列表-单选",
        "autoFillOption": "",
        "subContent": "移动5-1,移动5-2,移动预选址,移动2G网络提升,PTN三平面,电信800M,电信1800M,电信LTE五期800M新增,联通第一批,联通第二批,零星需求,其他",
        "defaultValue": "",
        "tipInfo": ""
       },
       {
        "eleId": "地市名称",
        "eleName": "地市名称",
        "eleType": "元素",
        "isRequired": "是",
        "controlType": "文本框",
        "autoFillOption": "自动城市",
        "subContent": "",
        "defaultValue": "",
        "tipInfo": ""
        },
        {
          "eleId": "区县名称",
          "eleName": "区县名称",
          "eleType": "元素",
          "isRequired": "是",
          "controlType": "文本框",
          "autoFillOption": "自动区县",
          "subContent": "",
          "defaultValue": "",
          "tipInfo": ""
        },
        {
          "eleId": "建设类型",
          "eleName": "建设类型",
          "eleType": "元素",
          "isRequired": "是",
          "controlType": "下拉列表-单选",
          "autoFillOption": "",
          "subContent": "地面新建站,楼顶新建站,地面改造站,楼顶改造站,地面隐患站,楼顶隐患站",
          "defaultValue": "楼顶改造站",
          "tipInfo": ""
        },
        {
          "eleId": "场景划分",
          "eleName": "场景划分",
          "eleType": "元素",
          "isRequired": "是",
          "controlType": "下拉列表-单选",
          "autoFillOption": "",
          "subContent": "密集市区,一般市区,县城,乡镇,农村,山区",
          "defaultValue": "",
          "tipInfo": ""
        },
        {
          "eleId": "需求经度",
          "eleName": "需求经度",
          "eleType": "元素",
          "isRequired": "是",
          "controlType": "文本框",
          "autoFillOption": "",
          "subContent": "",
          "defaultValue": "",
          "tipInfo": ""
        }
    ],
    items: [
      { name: '移动', value: '移动' },
      { name: '联通', value: '联通', checked: 'true' },
      { name: '电信', value: '电信' },
      { name: '移动+联通', value: '移动+联通' },
      { name: '移动+电信', value: '移动+电信' },
      { name: '移动+联通+电信', value: '移动+联通+电信' },
    ],
  }, 
  //导航栏切换
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
    });
  }, 
  //radio点击事件 点击传参 
  radioChange: function (e) {
     console.log(e)
     console.log('radio发生change事件，携带value值为：', e.detail.value)
     //替换
      this.setData({
        data_business: e.detail.value
      });
  },
  //input替换
  tapInput:function(e){
     console.log("Input")
     console.log(e)
     this.setData({
       data_longitude:e.detail.value
     })
  },
  //详细项点击事件跳出模态框
  tapBus: function(){ 
    this.setData({
      hidden:false
    })
    console.log("clicked me")
  },
  //取消模态框
  cancel: function(){
    this.setData({
      hidden: true
    });
      console.log("clicked cancel")
  },
  //调用image接口
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
        console.log("999", tempFilePaths);
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
  //增加的内容
  onLoad:      
  //缓存数组长度，进一步提高代码性能
    function(eleName, dwData) {
      var result = []
      for (var i = 0, len = this.data.dwData.length; i < len; i++) {
        //  result.push(dwData[i][eleName])
        result[i] = this.data.dwData[i]["eleName"];
    }
    console.log(result)
  },
    // function (options) {
    // console.log(options.id);
    // console.log(options.class);
    // console.log(this.data.dwData);
    // console.log(this.data.hidden);
    // console.log('Items',this.items);
    // let init;
    // 一个id对应着一组详细的数据 通过 id 对应
    // for (var i = 0; i < this.data.dwData.length; i++) {
    //   if (this.data.dwData[i].id == options.id) {
    //       init = this.data.dwData[i]
    //     }
    //   };
    // console.log(this);
    // console.log('Init',init);
    // this.setData({
    //   detail_class: options.class,
    //   data_name: init.name,
    //   data_id: init.id,
    //   data_city: init.city,
    //   data_business:init.business,
    //   data_DistrictCity: init.DistrictCity,
    //   data_longitude: init.longitude,
    //   data_latitude: init.latitude,
    //   data_needLongitude: init.needLongitude,
    //   data_needLatitude: init.needLatitude,
    //   data_address:init.address,
    //   data_worker: init.worker,
    //   data_date: init.date,
    //   data_times: init.times,
    //   data_plies:init.lies,
    //   data_state:init.state ,
    //   data_welcome:init.welcome,
    //   data_photo :init.photo,
    //   data_photoDate:init.photoDate 
    // })
  // }
});