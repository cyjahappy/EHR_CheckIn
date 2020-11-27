const path = `/gmkg/app/mobile/HandlerMyTDAdd.ashx?rand=`+ getCurrentDate(1) + `&empid=990&lat=24.51019&lng=118.1759&td_time=` + getCurrentDate(2);

function getCurrentDate(format) {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth();//得到月份
    var date = now.getDate();//得到日期
    var day = now.getDay();//得到周几
    var hour = now.getHours();//得到小时
    var min = now.getMinutes();//得到分钟
    var sec = now.getSeconds();//得到秒
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    var time = "";
    if(format==1){
        time = year + "/" + month + "/" + date + "%20" + hour + ":" + min + ":" + sec;
        return time;
    }
    if(format==2){
        time = year + "%2F" + month + "%2F" + date + "+" + hour + "%3A" + min + "%3A" + sec;
        return time;
    }
    if(format==3){
        return hour + ":" + min + ":" + sec;
    }
    
  }
$notify("陛下", "您在" + getCurrentDate(3), "打卡成功");
$done({path: path, headers: $request.headers});
