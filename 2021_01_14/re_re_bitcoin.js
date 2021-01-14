const x = 4, y=12, item = [4],
toptab = ['체결', '일별'], 
tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];
let div, table, tr, nowMonth, nowDay, nowHour, nowMinute;

// 시간 새로고침 함수
function timeRefresh() {
let t = new Date(),
    nowMonth = t.getMonth() < 10 ? '' + t.getMonth()+1 : t.getMonth()+1,
    nowDay = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
    nowHour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
    nowMinute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
    item[0] = `${nowMonth}.${nowDay}  ${nowHour}:${nowMinute}`;
}
    timeRefresh();
    createTable('bitcoin_title');
    createTopTh();
    createTable('bitcoin_body');
    createMiddleTd(tab, 'middle_text_align');

    for(let i = 0; i < y; i++) {
        createTable('bitcoin_body');
        createMiddleTd(item, 'body_td');
    }

// 2초마다 새로운 데이터 출력 및 시간동기화
setInterval(function() {
    timeRefresh();
    createTable('bitcoin_body');
    createMiddleTd(item, 'body_td');
    document.body.scrollTop = document.body.scrollHeight;}, 2000);

    // 테이블 생성
    function createTable(classname) {
    table = document.createElement('table'),
    tr = document.createElement('tr');
    table.className = classname;
    document.body.appendChild(table);
    table.appendChild(tr);
}
    // 체결 / 일별 탭
    function createTopTh() {
        for (let i=0; i < 2; i++) {
            th = document.createElement('th');
            th.textContent=[toptab[i]];
            th.className = "th_top";
            tr.appendChild(th);
    }
}
    // 4행 1열 테이블 생성 및 데이터 입력
    function createMiddleTd(data, classname) {
        for(let i = 0; i < x; i++) {
            insertItem(item, 1, 2, 3, 40000000, 8, 3000000);
            td = document.createElement('td');
            td.textContent=[data[i]];
            tr.appendChild(td);
            tr.className = 'text_bold';
            td.className = classname;
        }
    }

    function insertItem(name, space1, space2, space3, range1, fixed, range2) {
            name[space1] = Math.floor(Math.random()*range1);
            name[space2] = (Math.random()*1).toFixed(fixed);
            name[space3] = Math.floor(Math.random()*range2);
    }


