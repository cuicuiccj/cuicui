	
		var oUl=document.getElementById("lists");
		var ipt=document.getElementById("txt");
//		console.log(ul)
	   ipt.oninput=function(){
	  	   var val=ipt.value;
	  	   var oScript=document.createElement("script");
		oScript.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&sugmode=2&json=1&p=3&sid=1439_21125_17001_24328_20928&req=2&bs=aaa&csor=3&pwd=aaa&cb=date";
			
		document.body.appendChild(oScript);
		document.body.removeChild(oScript);
	   }
	
	   function date(data){
	   	console.log(data.s);
	   	var dat=data.s;
	   	var str="";
	   	
	   	for(var i=0;i<dat.length;i++){
//	   		console.log(i);
	   		str+="<li>"+dat[i]+"</li>";
	   	}
//	   	console.log(str);
		oUl.innerHTML=str;
	   	 
	   }
	
	
					
