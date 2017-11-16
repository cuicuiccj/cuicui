$(function(){
//   var img=document.getElementsByClassName("img-rg")[0];
	var top=document.getElementsByClassName("top-left")[0];
	$.getJSON("datas.json",function(res){
//		var date1=res["A"];
//		var date2=res["B"];
		console.log(res);
		console.log(res);
		for(var i=0;i<res.length;i++){
			var str="";
			str+="<p class='p-one'>"+res[i].title+"</p><p class='p-two'>"+res[i].name+"</p><a class='a-one'>"+res[i].price+"</a><a class='a-two'>"+res[i].price1+"</a><p>"+res[i].name1+"</p>"
			
			console.log(str);
			
			
		}
		
		 top.innerHTML=str;
		
	})
	
	

})
