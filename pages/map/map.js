var app = getApp()
//引入百度地图api
var bmap = require('../../libs/bmap-wx.js');
var BMap;
var wxMarkerData = []
Page({
  data: {
    hidden: true,
    list: [],
  },
  onLoad: function () {
    // showView: (options.showView == "true" ? true : false)
    //保证wx.getSystemInfo的回调函数中能够使用this
    var that = this
    //通过id操作map组件，wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext("map4select");
    //构造百度地图api实例
    BMap = new bmap.BMapWX({
      ak: 'Px4gLSlG11IagRMBXidiDhgDlNdvqq0e'
    })  
     // 获取定位，并把位置标示出来
    app.getLocationInfo(function (locationInfo) {
      console.log(66);
      // 问服务器要数据，获取当前的地理位置
      console.log(locationInfo);
      console.log('map', locationInfo);
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude,
        markers: that.getNearbyMarkers(),
      })
    })
    //调用wx.getSystemInfo接口，然后动态绑定组件高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
          width: res.windowWidth,
          controls: [{
             id: 9,
             iconPath: '../../imgs/2017119.png',
             position: {
              left: res.windowWidth / 2 - 15,
              top: res.windowHeight / 2 - 35,
              width: 30,
              height: 30
              },
             clickable: true
          }],
        })
      }
    })
    // 获取后台mark相关数据
    // wx.request({
    //     // url:"http://172.16.108.221:10003/template/getUserTemplate?userId=lw&updateTime=111111111",
    //     //  url:"https://172.16.241.5:23588/template/getUserTemplate?userId=lw&updateTime=111111111",
    //     data:'',
    //     method:'get',
    //     header:{'content-type':'application/json'},
    //     success:function(res){
    //       console.log(res)
    //   },
    // })
  },
  getNearbyMarkers: function() {
    var JSON = [
      // {
      //   id: 11,
      //   iconPath: "../../imgs/2017118.png",
      //   longitude: locationInfo.longitude,
      //   latitude: locationInfo.latitude,
      //   width: 30,
      //   height: 30,
      //   callout: {
      //     content: "test01",
      //     color: '#000',
      //     fontSize: 10,
      //     borderRadius: 2,
      //     bgColor: '#CCC',
      //     padding: 2,
      //     display: 'BYCLICK'
      //   }
      // },
      {
        iconPath: '../../imgs/2017118.png',
        id: 10,
        latitude: "32.060253",
        longitude: "118.796267",
        width: 30,
        height: 30,
        callout: {
          content: "test02",
          color: '#000',
          fontSize: 10,
          borderRadius: 2,
          bgColor: '#CCC',
          padding: 2,
          display: 'BYCLICK'
        }
      },
    ];
    return JSON;
  },
  // getDataFromServer: function(e) {
  //   console.log(e);
    // TODO跟服务器交互的 模拟数据 ，
  //   if(e.markerId == 11) {
  //     var JSON = [
  //       { id: 11, name: 'test01' },
  //       { id: 22, name: 'test02' },
  //       { id: 33, name: 'test03' },
  //       { id: 44, name: 'test04' },
  //       { id: 55, name: 'test05' }
  //     ];
  //   } else if (e.controlId == 9) {
  //     var JSON = [
  //       { id: 1, name: '17娄底新建房屋面租赁站' },
  //       { id: 2, name: '17娄底改造放物面租赁机房站'},
  //       { id: 3, name: '欢迎领导',class:'wei1'},
  //       { id: 4, name: '17娄底新建地面站' },
  //       { id: 5, name: '17娄底改造地面机房站' },
  //       { id: 6, name: '苏州-楼顶站' },
  //       { id: 7, name: '苏州-地面站' },
  //       { id: 8, name: '17娄底改造地面机柜站'},
  //       { id: 9, name: '苏州-改造站' },
  //       { id: 10, name: '17娄底改造屋面机柜站' },
  //       { id: 11, name: '芜湖移动4G五期新建站' },  
  //     ];
  //   } else {
  //     var JSON = [
  //       { id: 111, name: 'test11' },
  //       { id: 222, name: 'test12' },
  //       { id: 333, name: 'test13' },
  //       { id: 444, name: 'test14' },
  //       { id: 555, name: 'test15' }
  //     ];
  //   }
  //   return JSON;
  // },
  //分割 点击自己 自定义 的锚点，拿到后台数据绑定页面
  makertap: function(e) {
    // 根据ID请求后端数据获取JSON设置到list
    this.setData({
      hidden: false,
      list: this.getDataFromServer(e),
      showMap: false
    });

  },
  //marker点击事件
  markertap(e) {
    console.log(e.markerId)
  },
  // control的点击事件
  controltap(e) {
    // 根据ID请求后端数据获取JSON设置到list
    // this.setData({
    //   hidden: false,
    //   list: this.getDataFromServer(e)
    // });
    wx.navigateTo({
      url: '../mapzhuan/mapz?controlId=' + e.controlId + '&markerId=' + e.markerId,
    })
    console.log("00000",e)  
  },
  // 点击关闭按钮事件
  // confirm: function () {
  //   this.setData({
  //     hidden: true
  //   });
  //   console.log("clicked confirm");
  // },
    // 页面显示
    onShow: function () {
      // 1.创建地图上下文，移动当前位置到地图中心
      this.mapCtx = wx.createMapContext("map4select"); // 地图组件的id
      this.movetoPosition()
    },
    // 定位函数，移动位置到地图中心
    movetoPosition: function () {
      this.mapCtx.moveToLocation();
    }
})