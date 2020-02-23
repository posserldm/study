// consloe.log('hello world')

// 1.0获得要操作的事件源
var banner = document.querySelector('.banner');
console.log(banner);
var banngerImg = document.querySelectorAll('.banner img');
console.log(banngerImg);
var timer = null;
var index = 0;

// 显示图片的函数
function showPic() {
    // 每经过一秒就换一张图片
    for (var i = 0; i < banngerImg.length; i++) {
        banngerImg[i].style.cssText = "display:none";
    }
    banngerImg[index].style.display = "block";
    console.log(index);
}

function fn() {
    index++;
    // 判断是否到了最后一张图
    if (index >= banngerImg.length) {
        index = 0;
    }
    showPic();
}

timer = setInterval(fn, 1000);

// 鼠标悬停时，暂停定时器
banner.onmouseover = function () {
    clearInterval(timer);
    console.log('over');
}

// 鼠标离开， 开始定时器
banner.onmouseout = function() {
    timer = setInterval(fn, 1000);
    console.log('out');
}

var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
console.log(left, right)

right.onclick = function() {
    index++;
    if (index >= banner.length) {
        index = 0;
    }
    showPic();
    console.log('right');
}
left.onclick = function() {
    index--;
    if (index < 0) {
        index = banner.length - 1;
    }
    showPic();
    console.log('left');
}