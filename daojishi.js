window.onload=function(){
	var curtime=new Date(),
			endtime=new Date("2016,3,31"),
			lefttime=Math.ceil((endtime.getTime()-curtime.getTime())/(24*60*60*1000));
	document.getElementById("timeShow").innerHTML="距离  "+endtime+"  仅剩下"+lefttime+"  天";
	}
