$(function(){
	
	var mei=document.getElementsByClassName('mei')[0];
	var mei_left=document.getElementsByClassName('rong1')[0];
	var zui=document.getElementsByClassName('zui')[0];
	var rong1=document.getElementsByClassName("rong1")[0];
	var rong1_ul=rong1.children[0];
	$.getJSON("../json/lump.json",function(res){
		var to=res["to"];
		var meiA=res["A"];
		var meiB=res["B"];
		var meiC=res["C"];
		var aa=res["A"]["A1"];
	
	var tm_warp=document.getElementsByClassName("tm_warp")[0];
	var to="<img src='" +to["img"]+ "'/>";
	tm_warp.innerHTML=to;
		var strA="";
		for(var i in aa){
			strA+="<li><a>"+aa[i]+"</a></li>";
		}
		rong1_ul.innerHTML=strA;
		
		var rong2=document.getElementsByClassName("rong2")[0];
		bigimg="<img src='" +meiA["A2"]["imgsrc"]+ "'/>";
		rong2.innerHTML=bigimg;
		
		var rong3=document.getElementsByClassName("rong3")[0];
		var row1=document.getElementsByClassName("row1")[0];
		var Bb1='';
		for(var i in meiB){
			Bb1+="<a href=''><img src='" +meiB[i].imgsrc+ "'/><div>"+meiB[i].name+"</div><div><span>"+meiB[i].price+"</span><span>"+meiB[i].original+"</span></div>";
		}
		row1.innerHTML=Bb1;
		
		var mui=document.getElementsByClassName("mui")[0];
		var Cc='';
		for(var i in meiC){
			Cc+="<div id='brand'><img src='" +meiC[i].imgsrc+ "'/><div class='brand_title'>" +meiC[i].name+ "</div></div>";
		}
		mui.innerHTML=Cc;
//		console.log()
		
		var butto=document.getElementById("butto");
		var btn1=document.getElementsByClassName("current")[0];
		var btn2=document.getElementsByClassName("current")[1];
		var btn3=document.getElementsByClassName("current")[2];
		btn1.onclick=function(){
			startMove(mui,{"left":-0});
		};
		btn2.onclick=function(){
			startMove(mui,{"left":-270});
		};
		btn3.onclick=function(){
			startMove(mui,{"left":-540});
		};
	});
});


													
