/*----------------获取ID--------------------------------*/
function $(str){
	var newStr = str.substring(0,5);
	if(newStr == "name="){
		return document.getElementsByName(str.substring(5,str.length));
	}else{
		if(newStr[0] == "#"){
			return document.getElementById(str.substring(1,str.length));
		}else if(newStr[0] == "."){
			return document.getElementsByClassName(str.substring(1,str.length));
		}else{
			return document.getElementsByTagName(str);
		}
	}
}
/*---------------------显示n天后的时间--------------------------------*/
function afterNumDate(num){
	var d = new Date();
	var day = d.getDate();
	d.setDate(num + day);
	return d;
}
/*----------------------删除空白节点-------------------------------------*/
function removeSpaceNode(node){
	for(var i = 0; i < node.childNodes.length; i++){
		if(node.childNodes[i].nodeType == 3 && /^\s+$/.test(node.childNodes[i].nodeValue)){
			node.removeChild(node.childNodes[i]);
		}
	}
}
function removeSpaceNode1(nodes){
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			//直接删除掉该空白节点
			nodes[i].parentNode.removeChild(nodes[i]);
		}
	}
}

	//剔除空白节点 传入所有的子节点进行处理
function removeSpaceNode2(nodes){
	//将不是空白节点节点插入到新数组中
	var newArr = [];
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			continue;
		}else{
			newArr.push(nodes[i]);
		}
	}
	//返回剔除掉空白节点的数组
	return newArr;
}
/*--------------------变成两位数字-------------------------*/
function getNum(num){
	if(num < 10){
		return "0" + num;
	}
	return num;
}

/*--------------------随机生成颜色-------------------------*/
function randomColor(){
	var color = "rgba(" + Math.round(Math.random() * 255) + "," + 
	Math.round(Math.random() * 255) + "," + 
	Math.round(Math.random() * 255) + ",1)";
	return color;
}
/*-----------查找指定元素指定CSS属性的值---------------------------*/
//当前有效的样式
function getStyle(element,style){
	return element.currentStyle ? element.currentStyle[style] : 
	getComputedStyle(element)[style];
}
/*------封装函数 可以创建一个带文本的节点对象--------------------------*/
function createNodeWithText(type, text){
	var node = document.createElement(type);
	//判断当前文本是否存在
	if(text){
	var textNode = document.createTextNode(text);
		node.appendChild(textNode);
	}
	return node;
}

/*------------------随机产生一个四位验证码---------------------------*/
function textCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			arr.push(String.fromCharCode(num + 87));
		}else if(num >= 65 && num <= 90){
			arr.push(String.fromCharCode(num));
		}else{
			i--;
		}
	}
	return arr.join("");
}
/*------------------随机产生一个纯数字的四位验证码---------------------------*/
function testCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		arr.push(parseInt(Math.random() * 10));
	}
	return arr.join("");
}
/*------------------insertAfter()---------------------------*/
function insertAfter(newElement,oldElement){
	var parent = oldElement.parentNode;
	if(parent.lastChild === oldElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,oldElement.nextSibling);
	}
}

/*-----------计算两个数的加减乘除取余-----------------------*/
function calculate(num1,symbol,num2){
	switch(symbol){
		case "+":
			return num1 + num2;
			break;
		case "-":
			return num1 - num2;
			break;
		case "*":
			return num1 * num2;
			break;
		case "/":
			return num1 / num2;
			break;
		case "%":
			return num1 % num2;
			break;
		default:
			alert("error");
			break;
	}
}
/*---------------------------创建Cookie----------------------------------*/
function setCookie(name,value,expires,path,domain,secure){
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if(expires){
		cookieText += ";expires=" + expires;
	}
	if(path){
		cookieText += ";path=" + path;
	}
	if(domain){
		cookieText += ";domain=" + domain;
	}
	if(secure){
		cookieText += ";secure";
	}
	document.cookie = cookieText;
}
/*---------------------------获取Cookie----------------------------------*/
function getCookie(name){
	var cookieText = decodeURIComponent(document.cookie);
	var start = cookieText.indexOf(name);
	if(start == -1){
		return;
	}else{
		var end = cookieText.indexOf(";",start);
		if(end == -1){
			end = cookieText.length;
		}
	}
	//键值对提取出来
	var subStr = cookieText.substring(start,end);
	//使用=进行分割
	var arr = subStr.split("=");
	return arr[1];
}
/*--------------------------删除Cookie-----------------------------*/
function removeCookie(name){
	setCookie(name,"",new Date(0));
}
/*--------------绑定事件的兼容性写法---------------------------------------*/
function addEvent(obj,type,func){
	if(obj.addEventListener){
		obj.addEventListener(type,func,false);
	}else if(obj.attachEvent){
		obj.attachEvent("on" + type,func);
	}
}
/*---------------------删除事件的兼容性写法-------------------------------------*/
function removeEvent(obj,type,func){
	if(obj.removeEventListener){
		obj.removeEventListener(type,func,false);
	}else if(obj.detachEvent){
		obj.detachEvent("on" + type,func);
	}
}
/*----------------事件对象的兼容性写法-------------------------------------*/
function getTarget(evt){
	if(evt.target){
		return evt.target;
	}else if(evt.srcElement){
		return evt.srcElement;
	}
}
/*-----------------阻止默认行为，跨浏览器写法---------------------------*/
function preDef(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else if(evt.returnValue){
		evt.returnValue = false;
	}
}
/*--------------------封装AJAX-------------------------*/
function ajax(method,url,data,success){
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch(error){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(method == "get" && data){
		url += "?" + data;
	}
	xhr.open(method,url,true);
	if(method == "get"){
		xhr.send();
	}else{
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				success && success (xhr.responseText);
			}else{
				alert("链接错误 + Err:" + xhr.status);
			}
		}
	}
}