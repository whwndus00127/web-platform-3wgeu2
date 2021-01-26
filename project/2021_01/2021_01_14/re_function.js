const x = 4, 
y=12, 
item = [4],
toptab = ['체결', '일별'], 
tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];

// 시간 함수
let t = new Date(),
    nowMonth = t.getMonth() < 10 ? '' + t.getMonth()+1 : t.getMonth()+1,
    nowDay = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
    nowHour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
    nowMinute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();

    item[0] = `${nowMonth}.${nowDay}  ${nowHour}:${nowMinute}`; // 시간 대입

// 태그 생성 함수
function createTag(name) {
    return document.createElement(name);
}
// 태그 붙이기 함수
function append(parents, child) {
    parents.appendChild(child);
}
// 클래스 이름 지정 함수
function class_name(name, classname) {
    return name.className = classname;
}
// 데이터 삽입 함수
function data_insert(location, data) {
    location.innerHTML = data;
}
// item 공간에 난수를 삽입하고 소수점을 제거하는 함수
function random_Item(space, range) {
    item[space] = Math.floor(Math.random()*range);
}
// item 공간에 난수를 삽입하고 소수점을 일정구간 자르는 함수
function random_Item_tofixed(space, range, tofixed) {
    item[space] = (Math.random()*range).toFixed(tofixed);
}

const topDiv = createTag('div'),
topTable = createTag('table'),
topTr = createTag('tr');

append(document.body, topDiv);
append(topDiv, topTable);
append(topTable, topTr);

class_name(topTable, 'bitcoin_title');

for (let i=0; i < 2; i++) {
    const topTh = createTag('th');
    data_insert(topTh, toptab[i]);
    class_name(topTh, 'th_top');
    append(topTr, topTh);
}

const middleDiv = createTag('div'),
middleTable = createTag('table'),
middleTr = createTag('tr');

class_name(middleTable, 'bitcoin_body');
class_name(middleTr, 'body_border');

append(document.body, middleDiv);
append(middleDiv, middleTable);
append(middleTable, middleTr);

for(let j = 0; j < x; j++) {
    const middleTd = createTag('td');
    data_insert(middleTd, tab[j]);
    append(middleTr, middleTd);
    class_name(middleTr, 'text_bold');
    class_name(middleTd, 'middle_text_align');
    }

for(let i = 0; i < y; i++) {
    const bodyTr = createTag('tr');
    append(middleTable, bodyTr);
    class_name(bodyTr, 'bodyTr_whitesmoke');

    for(let j = 0; j < x; j++) {

        random_Item(1, 40000000);
        random_Item_tofixed(2, 1, 8);
        random_Item(3, 3000000);
        
        const bodyTd = createTag('td');
        data_insert(bodyTd, item[j]);
        append(bodyTr, bodyTd);
        class_name(bodyTd, 'body_td');
        }
    }