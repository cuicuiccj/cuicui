window.onload=function(){
	

		var oZoomBox = document.getElementById("zoomBox");
			var oMidArea = document.getElementById("midArea");
			var oZoom = document.getElementById("zoom");
			var oBigArea = document.getElementById("bigArea");
			var oBigImg = oBigArea.children[0];
			var oSmallArea = document.getElementById("smallArea");
			var aSmallLists = oSmallArea.children[0].children;
			
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
				
				//因为放大镜是相对于oZoomBox定位的，需要用鼠标坐标值减去oZoomBox距离可视区域左边和上边的距离
				//假设放大镜是相对于oMidArea定位的，需要用鼠标坐标值减去oZoomBox距离可视区域左边和上边的距离，还要减去oMidArea
				//距离oZoomBox的距离
				var _left = evt.clientX - oZoomBox.offsetLeft - oZoom.offsetWidth/2;
				var _top = evt.clientY - oZoomBox.offsetTop - oZoom.offsetHeight/2;
				
				//不能越界
				
				if(_left <= 0){
					_left = 0;
				}
				if(_top <= 0){
					_top = 0;
				}
				if(_left >= oMidArea.offsetWidth - oZoom.offsetWidth){
					_left = oMidArea.offsetWidth - oZoom.offsetWidth;
				}
				if(_top >= oMidArea.offsetHeight - oZoom.offsetHeight){
					_top = oMidArea.offsetHeight - oZoom.offsetHeight;
				}
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				//放大镜向右移动的距离与中图区域宽度的比 和  大图向左移动的距离和大图宽度的比 相等
				oBigImg.style.left = -oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
				
			}
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
				
			}
			
			for(let i = 0; i < aSmallLists.length; i++){
				aSmallLists[i].onclick = function(){
					for(var j = 0; j < aSmallLists.length; j++){
						aSmallLists[j].className = "";
					}
					this.className = "hover";
					oMidArea.children[0].src = "img/"+(i+1)+".jpg";
					oBigImg.src = "img/"+(i+1)+".jpg";
				}
			}
	
			
			
			

	$.getJSON("shuju.json",function(date){
				var sss = location.search;
             	var arr = sss.split("=");
				console.log(arr);

		for(var i in date){
				if(date[i].id==arr[1]){
			oMidArea.children[0].src=date[i].imgsrc;
			oBigArea.children[0].src=date[i].imgsrc
		}	
		}
		

	})
var shangPin="";
var  xiangxi={};//商品名称和id
	$("#last-li").click(function(){
	var sss = location.search;
             	var arr = sss.split("=");
				var id=arr[1];	
				console.log(id)
 				xiangxi=JSON.parse(getcooie("car"));
console.log(xiangxi)
                if (xiangxi[id]) {
                    xiangxi[id] += 1
                }
                else {
                    xiangxi[id] = 1
                }
                shangPin = JSON.stringify(xiangxi);
                console.log(shangPin);
                addcookie("car", shangPin, 7);
       })


		
	}
			

 function addcookie(obj,value,day) {
        var nowedate=new Date();
        nowedate.setDate(nowedate.getDate()+day);
        document.cookie = obj + "=" + value + ";expires="+nowedate;
    }
    function getcooie(obj) {
        var str = document.cookie;//字符串
        var fstr = str.split(";")//字符串分割数组
        for (var i = 0; i < fstr.length; i++) {
            var ssr = fstr[i].split("=")//将数组的每一项以=分割;这样的话得到的数组第一个元素为属性名,第二个元素为属性值;
            if (ssr[0] == obj) {
                return ssr[1];
            }else {}
        }
    }
    function remmove(obj) {
        addcookie(obj,1,-1)
    }
