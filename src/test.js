// import string from "./css.js";
const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.skin{background: #ffe600;min-height: 50vh;position: relative;}
.nose{border: 10px solid black;border-color: black transparent transparent;border-bottom: none;width: 0px;height: 0px;position: relative;left: 50%;top: 145px;margin-left: -10px; z-index:10;}
@keyframes wave{
  0%{
    transform: rotate(0deg);
}
  33%{
    transform: rotate(5deg);
}
  66%{
    transform: rotate(-5deg);
}
  100%{
    transform: rotate(0deg);
}
}
.nose:hover{
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}
.yuan{position: absolute;width: 20px;height: 6px;top: -16px;left: -10px;border-radius: 10px 10px 0 0;background: black;}
.eye {border: 2px solid #000;width: 64px;height: 64px;position: absolute;left: 50%;top: 100px;margin-left: -32px;background: #2e2e2e;border-radius: 50%;}
.eye::before{content: '';display: block;border: 3px solid #000;height: 30px;background: #fff;border-radius: 50%;position: relative;left: 4px;top: 2px;width: 30px;}
.eye.left{transform: translateX(-100px);}
.eye.right{transform: translateX(100px);}
.mouth{width: 200px;height: 200px;position: absolute;left: 50%;top: 170px;margin-left: -100px;}
.mouth .up{position: relative;top: -20px;z-index: 1;}
.mouth .up .lip{border: 3px solid black;height: 30px;width: 100px;background: #ffe600;border-top-color: transparent;border-right-color: transparent;position: relative;position: absolute;left: 50%;margin-left: -50px;}
.mouth .up .lip.left{border-radius: 0 0 0 50px;transform: rotate(-15deg) translateX(-53px);}
.mouth .up .lip.right{border-radius: 0 0 50px 0px;transform: rotate(15deg) translateX(53px);}
.mouth .up .lip::before{content: '';display: block;width: 7px;height: 30px;position: absolute;bottom: 0;background: #ffe600;}
.mouth .up .lip.left::before{right: -6px;}
.mouth .up .lip.right::before{left: -6px;}
.mouth .down{height: 180px;position: absolute;top: 5px;width: 100%;overflow: hidden;}
.mouth .down .yuan1{border: 3px solid black;width: 150px;height: 1000px;position: absolute;bottom: 0;left: 50%;margin-left: -75px;border-radius: 75px/300px;background: #9b000a;overflow: hidden;}
.mouth .down .yuan1 .yuan2{width: 200px;height: 300px;background: #ff485f;position: absolute;bottom: -155px;left: 50%;margin-left: -100px;border-radius: 100px;}
.face{
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
.face > img{
  position: absolute;
  top: 50%;
  left: 50%;
}
.face.left{
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.left > img{
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.right{
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
`
let displayString = `
你好呀！
小王川老师，
在这特殊的日子里，
虽然交通不便，快递暂停，
所幸网络仍在。
我就在这里在线画一只皮卡丘送你好了，
为了让你知道这个过程，我会一步步画给你看。
首先这个背景有些单调，我们来上个色。
body{background:#ffe600;min-height:100vh;}
然后，我们再画个鼻子
.nose{
    border:10px solid black;
    border-color:black transparent transparent;
    width:0px;
    height: 0px;
    position: relative;
    left:50%;
    top:145px;
    margin-left:-10px;
    z-index:10;
}
再给鼻子添加动画*/
@keyframes wave{
    0%{
      transform: rotate(0deg);
  }
    33%{
      transform: rotate(5deg);
  }
    66%{
      transform: rotate(-5deg);
  }
    100%{
      transform: rotate(0deg);
  }
  }
.nose:hover{
    transform-origin:center bottom;
    animation: wave 300ms  infinite linear;
}
接下来我们就开始画个眼睛
.eye{
    border:2px solid #000;
    width:64px;
    height:64px;
    position: absolute;
    left:50%;
    top:100px;
    margin-left:-32px;
    background:#2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border:3px solid #000;
    width:30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left:4px;
    top:2px;
}
.eye.left{
    transform:translateX(-100px);
}
.eye.right{
    transform:translateX(100px);
}
然后我们再画它的嘴巴
.mouth{
    width:200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:170px;
    margin-left:-100px ;
}
.mouth .up{
    position: relative;
    top:-20px;
    z-index:1;
}
.mouth .up .lip{
    border:3px solid black;
    height: 30px;
    width:100px;
    background:#ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position:absolute;
    left:50%;
    margin-left:-50px;
}
画它的舌头
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip.right{
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(53px);
  }

  .mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before{
    right: -6px;
  }
  .mouth .up .lip.right::before{
    left: -6px;
  }
  .mouth .down{
      height: 180px;
      position: absolute;
      top:5px;
      width:100%;
      overflow: hidden;
  }
.mouth .down .yuan1{
    border:3px solid balck;
    width:150px;
    height: 1000px;
    position: absolute;
    bottom:0;
    left: 50%;
    margin-left:-75px;
    border-radius:75px/300px;
    background:#9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2{
      width:200px;
      height: 300px;
      background: #ff485f;
      position: absolute;
      bottom:-155px;
    left:50%;
    margin-left:-100px;
    border-radius:100px;
  }

最后再加两个红扑扑的害羞小脸蛋一切就可以了
.face{
  .face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
  }

  .face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
  }
  总算，画完了这个小玩意
  最后，我再祝你情人节快乐，
  明年今朝，鸳俦凤侣
  miss u
  `

let n = 1
let time = 100
const run = () => {
    n += 1
    if (n > string.length) {
        pause()
        return
    }
    demo.innerText = displayString.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}
const play = ()=>{
    return setInterval(run,time)
}
const pause = ()=>{
    window.clearInterval(id)
}
let id = play()

btnPause.onclick = ()=>{
    pause()
}
btnPlay.onclick = ()=>{
    pause()
    time = 100
    id = play()
}
btnSlow.onclick = ()=>{
    pause()
    time = 200
    id = play()
    console.log('slow')
}
btnNormal.onclick = ()=>{
    pause()
    time = 100
    id = play()
    console.log('quick')
}
btnFast.onclick = ()=>{
    pause()
    time = 50
    id = play()
    console.log('fast')
}