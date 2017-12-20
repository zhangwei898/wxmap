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
    // {
    //   id: '1',
    //   name: '南京站',
    //   business: '移动',
    //   city: '南京市',
    //   DistrictCity: '建邺区',
    //   longitude: '118.733455',
    //   latitude: '31.991953',
    //   needLongitude: '118.733455',
    //   needLatitude: '需求纬度：31.991953',
    //   address: '',
    //   worker: '',
    //   date: '2017.10',
    //   times: '第几次勘察：1',
    //   plies: '层数：',
    //   style: '结构形式：砖混',
    //   state: '维护是否方便：是',
    //   tower: '新建塔桅类型：支撑抱杆',
    //   height: '6'
    // },
    // {
    //   id: '2',
    //   name: '站名：',
    //   business: '联通',
    //   city: '苏州市',
    //   DistrictCity: '工业园区',
    //   longitude: '',
    //   latitude: '',
    //   needLongitude: '',
    //   needLatitude: '',
    //   address: '',
    //   worker: '',
    //   date: '2017.10',
    //   times: '第几次勘察：1',
    //   plies: '层数：',
    //   style: '结构形式：',
    //   state: '维护是否方便：',
    //   tower: '新建塔桅类型：',
    //   height: '6',
    //   welcome: "欢迎领导莅临",
    //   photo: "小张",
    //   photoDate: "2017.10"
    // },
    // {
    //   id: '3',
    //   welcome: "欢迎领导莅临",
    //   photo: "小张",
    //   photoDate: "2017.10"
    // },
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
          photoUrl: [],
        }
    ],
    //缓存数组长度，进一步提高代码性能
    getElename:function(eleName,dwData){
         var result=[]
         for(i=0,len=dwData.length;i<len;i++){
             result.push(dwData[i][eleName])
             result[i]=dwData[i][eleName];
             return
         }
         console.log(result)
      },
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
     console.log("input")
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
  onLoad: function (options) {
    console.log(options.id);
    console.log(options.class);
    console.log(this.data.dwData);
    console.log(this.data.hidden);
    console.log('Items',this.items);
    let init;
    // var a = options.id; a = a.replace(/"/g, ''); alert(a);
    for (var i = 0; i < this.data.dwData.length; i++) {
      if (this.data.dwData[i].id == options.id) {
          init = this.data.dwData[i]
        }
      };
    console.log(this);
    console.log('Init',init);
    this.setData({
      detail_class: options.class,
      data_name: init.name,
      data_id: init.id,
      data_city: init.city,
      data_business:init.business,
      data_DistrictCity: init.DistrictCity,
      data_longitude: init.longitude,
      data_latitude: init.latitude,
      data_needLongitude: init.needLongitude,
      data_needLatitude: init.needLatitude,
      data_address:init.address,
      data_worker: init.worker,
      data_date: init.date,
      data_times: init.times,
      data_plies:init.lies,
      data_state:init.state ,
      data_welcome:init.welcome,
      data_photo :init.photo,
      data_photoDate:init.photoDate 
    })
  }
});