const x = 4, 
y=12, 
item = [4],
toptab = ['체결', '일별'], 
tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];

let t = new Date(),
    nowMonth = t.getMonth() < 10 ? '' + t.getMonth()+1 : t.getMonth()+1,
    nowDay = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
    nowHour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
    nowMinute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();

    item[0] = `${nowMonth}.${nowDay}  ${nowHour}:${nowMinute}`;

function createTag(name) {
    return document.createElement(name);
}

function append(parents, child) {
    parents.appendChild(child);
}

function class_name(name, classname) {
    return name.className = classname;
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
    topTh.innerHTML=[toptab[i]];
    class_name(topTh, 'th_top');
    append(topTr, topTh);
}

