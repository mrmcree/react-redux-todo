export default function getTime(){
    // 添加创建日期
    let dt = new Date()
    let year = dt.getFullYear();
    let month = dt.getMonth();
    let day = dt.getDate();
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second= dt.getSeconds();
    // 将月份加1
    month = month + 1;
    if (month <= 9){month = "0" + month;}
    if (day <= 9){day = "0" + day;}
    if (hour <= 9){hour = "0" + hour;}
    if (minute <= 9){minute = "0" + minute;}
    if (second <= 9){second = "0" + second;}
    let creteData = year+ "年" + month+ "月" + day+ "日" + hour+ "时" + minute+ "分" + second+ "秒";
    let creteData2 = year+ "-" + month+ "-" + day+ " " + hour+ ":" + minute+ ":" + second;
    return [creteData,creteData2]

  }