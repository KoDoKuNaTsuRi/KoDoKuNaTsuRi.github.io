//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(/img/missile228/98901156_p2.jpg)",
    "url(/img/missile228/98901156_p3.jpg)",
    "url(/img/missile228/114257217.jpg)",
    "url(/img/missile228/87013646_p1.jpg)",
    "url(/img/missile228/79687052.jpg)",
    "url(/img/missile228/104391349.jpg)",
    "url(/img/missile228/95348611.jpg)",
    "url(/img/missile228/115177487.jpg)",
    "url(/img/missile228/112929295.jpg)",
    "url(/img/missile228/78826616.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];