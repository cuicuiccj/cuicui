
			//左右切换，上下切换，透明度切换
			window.onload=function(){
			var oBanner = document.getElementById("banner");
			var oScrollImg = document.getElementById("scrollImg");
			var oFocusList = document.getElementById("focusList");
			var oPrev = document.getElementsByClassName("prev")[0];
			var oNext = document.getElementsByClassName("next")[0];
			

			var aLi = oScrollImg.children;
			//焦点列表
			var aFlist = oFocusList.children;

			//克隆第一张
			var cloneLi = aLi[0].cloneNode(true);
			//追加到ul中
			oScrollImg.appendChild(cloneLi);

			var perWidth = aLi[0].offsetWidth;

			oScrollImg.style.width = perWidth * aLi.length + "px";

			var i = 0;
			
			
			var timer = setInterval(function(){
				move();
			},3000);
			
			
			for(let j = 0; j < aFlist.length; j++){
				aFlist[j].onmouseover = function(){
					clearInterval(timer);
					i = j-1;
					move();
				}
				aFlist[j].onmouseout = function(){
					timer = setInterval(function(){
						move();
					},3000);
				}
			}
			
			
			oNext.onclick = function(){
				clearInterval(timer);
				move();
			}
			oPrev.onclick = function(){
				clearInterval(timer);
				i = i -2;
				move();
			}
			
			oBanner.onmouseleave = function(){
				clearInterval(timer);
				timer = setInterval(function(){
					move();
				},3000)
			}

			
			function move() {
					i++;
					if(i == aLi.length) {
						i = 1;
						oScrollImg.style.left = 0;
					}
					
					if(i==-1){
						oScrollImg.style.left = -perWidth * (aLi.length-1) + "px";
						i = aLi.length - 2;
					}
					//控制焦点显示，和i有关
					for(var j = 0; j < aFlist.length; j++) {
						aFlist[j].className = "";
					}

					if(i == aFlist.length) {
						aFlist[0].className = "cur";
					} else {
						aFlist[i].className = "cur";
					}

					startMove(oScrollImg, {
						"left": -perWidth * i
					});
			}
			}
