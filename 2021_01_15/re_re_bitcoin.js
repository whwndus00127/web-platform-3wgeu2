const x = 4, y=12, obj = {range1:40000000, fixed:8, range2:3000000}; item = [4];
toptab = ['체결', '일별'], 
tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];
let div, table, tr, nowMonth, nowDay, nowHour, nowMinute, click = 1;

// 시간 새로고침 함수
function timeRefresh() {
let t = new Date(),
    nowMonth = t.getMonth() < 10 ? '' + t.getMonth()+1 : t.getMonth()+1,
    nowDay = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
    nowHour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
    nowMinute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
    return `${nowMonth}.${nowDay}  ${nowHour}:${nowMinute}`;
}

    createTable('bitcoin_title');
    createTopTh(toptab, tr);
    createTable('bitcoin_body');
    createMiddleTd(tab, 'middle_text_align');

    for(let i = 0; i < y; i++) {
        createTable('bitcoin_body');
        item[i] = insertItem(obj);
        createMiddleTd(item[i], 'body_td');
    }


// 2초마다 새로운 데이터 출력 및 시간동기화
var newData = setInterval(function() {
    timeRefresh();
    createTable('bitcoin_body');
    item = insertItem(obj);
    createMiddleTd(item, 'body_td');
    document.body.scrollTop = document.body.scrollHeight;}, 2000);

    // 테이블 생성
    function createTable(classname) {
    div = document.createElement('div'),
    table = document.createElement('table'),
    tr = document.createElement('tr');
    table.className = classname;
    document.body.appendChild(div);
    div.appendChild(table);
    table.appendChild(tr);
}
    // 체결 / 일별 탭
    function createTopTh(data, parents) {
        for (let i=0; i < data.length; i++) {
            th = document.createElement('th');
            th.textContent=[data[i]];
            th.className = "th_top";
            parents.appendChild(th);
    }
}
    // td 생성 및 데이터 입력
    function createMiddleTd(data, classname) {
        for(let i = 0; i < data.length; i++) {
            insertItem(obj);
            td = document.createElement('td');
            td.textContent=data[i];
            tr.appendChild(td);
            tr.className = 'text_bold';
            td.className = classname;
        }
    }
    // 데이터 삽입
    function insertItem(obj) {
            let temp = [4];
            temp[0] = timeRefresh();
            temp[1] = Math.floor(Math.random()*obj.range1);
            temp[2] = (Math.random()*1).toFixed(obj.fixed);
            temp[3] = Math.floor(Math.random()*obj.range2);
            return temp;
    }


