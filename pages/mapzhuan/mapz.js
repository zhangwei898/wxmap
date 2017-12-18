Page({
  data:{
    controlId:"",
    list: [],
  },
  //新建页面加载
  onLoad: function (options) {
    this.setData({
      controlId: options.controlId,
      list: this.getDataFromServer(options)
    })
    console.log("Options",options)
  },
    getDataFromServer: function (e) {
    console.log("E",e);
    // TODO跟服务器交互的 模拟数据 ，
    if (e.markerId == 11) {
      var JSON = [
        { id: 11, name: 'test01' },
        { id: 22, name: 'test02' },
        { id: 33, name: 'test03' },
        { id: 44, name: 'test04' },
        { id: 55, name: 'test05' }
      ];
    } else if (e.controlId == 9) {
      var JSON = [
        { id: 1, name: '17娄底新建房屋面租赁站' },
        { id: 2, name: '17娄底改造放物面租赁机房站' },
        { id: 3, name: '欢迎领导', class: 'wei1' },
        { id: 4, name: '17娄底新建地面站' },
        { id: 5, name: '17娄底改造地面机房站' },
        { id: 6, name: '苏州-楼顶站' },
        { id: 7, name: '苏州-地面站' },
        { id: 8, name: '17娄底改造地面机柜站' },
        { id: 9, name: '苏州-改造站' },
        { id: 10, name: '17娄底改造屋面机柜站' },
        { id: 11, name: '芜湖移动4G五期新建站' },
      ];
    } else {
      var JSON = [
        { id: 111, name: 'test11' },
        { id: 222, name: 'test12' },
        { id: 333, name: 'test13' },
        { id: 444, name: 'test14' },
        { id: 555, name: 'test15' }
      ];
    }
    return JSON;
  },
})