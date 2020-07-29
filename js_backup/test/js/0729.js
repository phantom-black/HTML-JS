

window.onload=function() {
    var now = new Date(); // 현재 날짜와 시간
    var fisrtDate = new Date("2019-12-25"); // 설정 날짜
    
    var start = fisrtDate.getTime(); // 기념일의 밀리세컨드
    var end = now.getTime(); // 오늘의 밀리세컨드
    var pass = end - start; // 오늘 - 기념일 -> 경과 시간의 밀리세컨드
    
    var passDay = Math.floor(pass/1000/60/60/24);
    document.querySelector("#passDay").innerHTML = passDay;
    
    calcDay(100);
    calcDay(200);
    calcDay(365);
    calcDay(500);
    calcDay(730);
    calcDay(1000);
    
    function calcDay(days) {
        // 전달받은 일을 밀리세컨드로 바꿔야함 
        var days2 = days*24*60*60*1000 // 일을 밀리세컨드로 변경
        var passDay2 = start + days2; // 기념일 - 경과일
    
        // 밀리세컨드를 Date 객체로 다시 만들어줘야함
        var someDate = new Date(passDay2);
    
        var year = someDate.getFullYear();
        var month = someDate.getMonth() + 1;
        var day = someDate.getDate();
    
        // 월을 2자리로 만듬
        var month2;
        var day2;
        if(month < 10) {
            month2 = "0" + month; 
        } else {
            month2 = month;
        }
        document.querySelector("#date" + days).innerHTML = year+"년 " + month2 + "월 " + day + "일 "
    
        // 일을 2자리로 만듬
        var day2;
        if(day < 10) {
            day2 = "0" + day;
        } else {
            day2 = day;
        }
        document.querySelector("#date" + days).innerHTML = year+"년 " + month2 + "월 " + day2 + "일 "
    }
}