//根据给定的id获取页面元素 并返回该元素
function $id(id){
	return document.getElementById(id);
}

//获取任意区间的随机整数   返回随机整数
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//定义一个函数 获取随机的颜色值
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//六位十六进制颜色值
function randColor(){
	var str = "0123456789abcdef";
	// 从这个字符串中随机取出6位 
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//定义一个函数 将日期时间格式转成 字符串
function dateToString(now){
	var y = now.getFullYear();
	var m =toTwo( now.getMonth()+1 );
	var d =toTwo( now.getDate() );		
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() ) ;
	return y+"-"+m+"-"+d + "  " + h + ":" + mi + ":" + s;
}

//如果是一位数的时间  前面拼接一个0
function toTwo(val){
	return val < 10 ? "0"+val : val
}

//定义一个函数 将一个字符串转成日期时间对象
function stringToDate(str){
	return new Date(str);
}

//定义一个时间差函数 
function diff(start,end){
    return end.getTime() - start.getTime();
}

//定义函数功能创建一个元素节点  返回创建的节点
function create(ele){
	return document.createElement(ele);
}
//碰撞函数
function pz(obj1,obj2){
	//获取obj1 的上下 左右四个边的数据
	T1 = obj1.offsetTop;
	B1 = obj1.offsetTop + obj1.offsetHeight;
	L1 = obj1.offsetLeft;
	R1 = obj1.offsetLeft + obj1.offsetWidth;
	
	//获取obj2 的上下 左右四个边的数据
	T2 = obj2.offsetTop;
	B2 = obj2.offsetTop + obj2.offsetHeight;
	L2 = obj2.offsetLeft;
	R2 = obj2.offsetLeft + obj2.offsetWidth;
	
	//查找碰不上的条件  如果碰不上 返回false   碰上了返回true
	if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){ //碰不上
		return false;
	}else{
		return true;
	}
}