

function getYYMMDD(time){
   var date = new Date(time);
   var Y = date.getFullYear() + '-';
   var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
   var D = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
//   var D = date.getDate() + ' ';
//   var h = date.getHours() + ':';
//   var m = date.getMinutes() + ':';
//   var s = date.getSeconds();

   return (Y+M+D);
}




var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var halfamonth = day * 15;
var month = day * 30;
function getDateDiff(dateTimeStamp){
   var now = new Date().getTime();
   var diffValue = now - dateTimeStamp;
   if(diffValue < 0){
      //若日期不符则弹出窗口告之
      //alert("结束日期不能小于开始日期！");
   }

   var monthC =diffValue/month;
   var weekC =diffValue/(7*day);
   var dayC =diffValue/day;
   var hourC =diffValue/hour;
   var minC =diffValue/minute;
   if(monthC>=1){
       result="发表于" + parseInt(monthC) + "个月前";
   }
   else if(weekC>=1){
       result = parseInt(weekC) + "周前";
   }
   else if(dayC>=1){
       result = parseInt(dayC) +"天前";
   }
   else if(hourC>=1){
       result = parseInt(hourC) +"个小时前";
   }
   else if(minC>=1){
       result = parseInt(minC) +"分钟前";
   }else{
       result = "刚刚发表";
   }
   return result;
}