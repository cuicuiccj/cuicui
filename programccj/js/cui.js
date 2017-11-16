$(function(){
	
	var ul=document.getElementsByClassName("li-list")[0];
	$.getJSON("shuju.json",function(date){
		var str="";
		
		for(var i=0;i<date.length;i++){
		console.log(date[i].imgsrc);	
		console.log(date[i].imgsrc);
		str +="<li><div><a href='detail.html?id="+date[i].id+"'><img src='"+ date[i].imgsrc +"'/></a></div><p><a href=''>"+date[i].title+"</a></p><p>"+date[i].price+"</p><span>"+date[i].xiaoling+"</span><span>"+date[i].comment+"</span><p><a href=''>"+date[i].shop+"</a></p><p><a href=''>"+date[i].jiaoyi+"</a></p></li>"
			
			}
		
		ul.innerHTML=str;
		
		
		
	})
	
	
	
})
