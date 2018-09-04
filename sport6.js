//obj : 表示操作的运动对象
//json ： 表示多个属性和目标值
//callback ：  回调函数
//支持缓冲运动和多物体运动   支持透明度改变  支持链式运动  支持完美运动
function startMove(obj,json,callback){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var flag = true;//假设值为true是 停止定时器
		//attr 就是操作的属性
		for( var attr in json ){
			var current = 0;
			if( attr == "opacity" ){
				current = getStyle( obj , "opacity" )*100;
			}else if( attr == "zIndex" ){
				current = parseInt( getStyle( obj , attr ) ) ;//获取当前样式值
			}else{
				current = parseInt( getStyle( obj , attr ) ) ;//获取当前样式值
			}
			var speed = (json[attr]-current) / 10;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if( current != json[attr] ){
				//没有达到目标值  就将flag的值变成false
				flag = false;
			}
			//继续设置当前元素的样式  使其能达到目标值
			if( attr == "opacity" ){
				obj.style["opacity"] = (current + speed) / 100;
			}else if( attr == "zIndex" ){
				obj.style.zIndex = json[attr];
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	
		//每一次定时器中的循环结束后 都判断一下flag的值是否是true
		if( flag ){
			clearInterval(obj.timer);
			//上一个动作完成 进入下一个动作
			//下一个动作（函数）是可变的
			if( callback ){
				callback();
			}
		}
	},300 )
}	

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}