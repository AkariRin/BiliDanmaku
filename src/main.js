import Vue from 'vue';
import mdui from 'mdui';
const conf = require('./config')

//创建vue实例
var app = new Vue({
  el: '#app',
  data: {
    danmaku: []
  },
  //创建实例后弹出snackbar
  created: function () {
    mdui.snackbar({
    message: '正在连接到弹幕服务器......',
    position: 'right-top',
    timeout: '1000'
    });
  },
  methods: {
    //返回带房间号的href地址
    roomHref:function(id){
      return 'https://live.bilibili.com/' + id
    }
  }
})

//创建websocket连接
const ws = new WebSocket(conf.ip, conf.protocol);

ws.onopen = function() {
  mdui.snackbar({
    message: '连接成功',
    position: 'right-top',
    timeout: '1000'
  });
};
ws.onclose = function() {
  mdui.snackbar({
    message: '已关闭连接',
    position: 'right-top',
    timeout: '1000'
  });
};
ws.onerror = function() {
  mdui.snackbar({
    message: '连接失败',
    position: 'right-top',
    timeout: '1000',
    onClose: function(){
      //do sth
    }
  });
};
//处理websocket消息
ws.onmessage = function (event) {
  var data = JSON.parse(event.data);
  //删除最开始的一条sysmsg
  if(data.cmd != "sysmsg"){
    //推送到vue实例中
    app.danmaku.push(data)
  }

}