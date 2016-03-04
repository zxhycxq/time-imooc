window.onload=function(){
	showTime();
}
	function checkTime(i){//检查是否为个位数，是，前面补零
		if(i<10){
		i="0"+i;
		}
		return i;
	}
	
 function showTime(){
	 var myDate=new Date(),//date()返回当日的日期和时间
			year=myDate.getFullYear(),
			month=myDate.getMonth()+1,
			date=myDate.getDate(),
			d=myDate.getDay(),
			h=myDate.getHours(),
			m=myDate.getMinutes(),
			s=myDate.getSeconds(),
			m=checkTime(m),
			s=checkTime(s);
	var weekday=new Array(7);//数组，存放时间，四种定义方式中的一种
		weekday[0]="星期日"
		weekday[1]="星期一"
		weekday[2]="星期二"
		weekday[3]="星期三"
		weekday[4]="星期四"
		weekday[5]="星期五"
		weekday[6]="星期六"
		document.getElementById("show").innerHTML="今天是"+year+"年"+month+"月"+date+"日"+weekday[d]+h+":"+m+":"+s;
		setTimeout(showTime,500);
  //alert(myDate.getMonth()+1);
}	
