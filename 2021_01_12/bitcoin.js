// 표의 행 열
var x = 4;
var y = 12;


var tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];
var item = new Array(4);
var nowMonth, nowDay, nowHour, nowMinute;

var d = new Date();

if(d.getMonth() + 1 < 10) {
    nowMonth = '' + d.getMonth()+1;
} else {
    nowMonth = d.getMonth()+1;
}

 if(d.getDate() < 10) {
    nowDay = '1' + d.getDate();
} else {
    nowDay = d.getDate();
}

if(d.getHours() < 10) {
    nowHour = '1' + d.getHours();
} else {
    nowHour = d.getHours();
}

if(d.getMinutes() < 10) {
    nowMinute = '1' + d.getMinutes();
} else {
    nowMinute = d.getMinutes();
}
// 현재시간 구하기
item[0] = nowMonth + '.' + nowDay + '  ' + nowHour + ':' + nowMinute;

// 최상단 탭 메뉴 [체결 / 일별]
document.write("<table class='bitcoin_title'> <tr> <th class='title_blue'>체결</th> <th>일별</th> </tr> </table>");
document.write("<table class='bitcoin_body'> <tr class='body_border'>");

// 상단 탭 메뉴 [체결시간 / 체결가격 / 체결량 / 체결금액]
for(i = 0; i < x; i++) {
    if(i === 0){
    document.write("<th class='alignLeft'>" + tab[i]+"</th>");
    } else if(i === 3) {
        document.write("<th class='alignRight'>" + tab[i]+"</th>");
    } else {
        document.write("<th>" + tab[i]+"</th>");
    }
}

document.write("</tr>")

// 나머지 구성요소
for(i = 0; i < y; i++) {
    if(i % 2 === 1) {
    document.write("<tr class='whiteSmoke'>")
    } else {
        document.write("<tr>")
    }
    for(j = 0; j < x; j++) {

        item[1] = Math.floor(Math.random()*40000000);
        item[2] = (Math.random()*1).toFixed(8);
        item[3] = Math.floor(Math.random()*3000000);

        if(j === 1) {
        document.write("<td class='colorRed'>" + item[j] + "</td>");
        } else if (j === 2) {
            document.write("<td class='colorBlue'>" + item[j] + "</td>");
        } else if(j === 0) {
            document.write("<td class='alignLeft'>" + item[j] + "</td>");
        } else if(j === 3) {
            document.write("<td class='alignRight'>" + item[j] + "</td>");
        }
    }
}
document.write("</table>");