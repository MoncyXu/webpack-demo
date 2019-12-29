import _ from "lodash";
import "./style.css";
import ImageSnow from "./snow.png";
import Data from "./data.xml";
import myPrint from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 将图像添加到我们现有的div
  var myImage = new Image();
  myImage.src = ImageSnow;
  element.appendChild(myImage);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = myPrint;

  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
