//변수, 배열 선언


function init(){
    const x = 4, 
    y=12, 
    item = [4],
    toptab = ['체결', '일별'], 
    tab = ['체결시간', '체결가격(KRW)', '체결량(BTC)', '체결금액(KRW)'];
    
    // 시간 대입
    let t = new Date(),
    nowMonth = t.getMonth() < 10 ? '' + t.getMonth()+1 : t.getMonth()+1,
    nowDay = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(),
    nowHour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(),
    nowMinute = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
    
    item[0] = `${nowMonth}.${nowDay}  ${nowHour}:${nowMinute}`; // 시간 계산

    createTopTable();
    createMiddleTable();
    createBodyTable();

    item[1] = randomNumber(40000000)
    item[4] = randomNumber(40000000)

    let topDiv = ce('div', 'bitcoin_title')
    
}


const randomNumber = () => {
    item[1] = Math.floor(Math.random()*40000000);
    item[2] = (Math.random()*1).toFixed(8);
    item[3] = Math.floor(Math.random()*3000000);

};


function ce(name, cname){

}



function createTopTable() {
    const topDiv = document.createElement('div'),
    topTable = document.createElement('table'),
    topTr = document.createElement('tr');

    topTable.className = 'bitcoin_title';

    document.body.appendChild(topDiv);
    topDiv.appendChild(topTable);
    topTable.appendChild(topTr);

    for (let i=0; i < 2; i++) {
        const topTh = document.createElement('th');
        topTh.innerHTML=[toptab[i]];
        topTh.className = "th_top";
        topTr.appendChild(topTh);
    }
}

const createMiddleTable = () => {
    const middleDiv = document.createElement('div'),
    middleTable = document.createElement('table'),
    middleTr = document.createElement('tr');

    middleTable.className = "bitcoin_body";
    middleTr.className = "body_border";

    document.body.appendChild(middleDiv);
    middleDiv.appendChild(middleTable);
    middleTable.appendChild(middleTr);

    for(let j = 0; j < x; j++) {
        const middleTd = document.createElement('td');
        middleTd.innerHTML=[tab[j]];
        middleTr.appendChild(middleTd);
        middleTr.className = "text_bold";
        middleTd.className = "middle_text_align";
    }
};

    const createBodyTable = () => {
        bodyTable = document.createElement('table'),
        bodyDiv = document.createElement('div');
        for(let i = 0; i < y; i++) {
            const bodyTr = document.createElement('tr');
    
            document.body.appendChild(bodyDiv);
            bodyDiv.appendChild(bodyTable);
            bodyTable.appendChild(bodyTr);
            bodyTable.className = "bitcoin_body";
            bodyTr.className = "bodyTr_whitesmoke";
            for(let j = 0; j < x; j++) {
                
                randomNumber();
    
                const bodyTd = document.createElement('td');
                bodyTd.innerHTML=[item[j]];
                bodyTr.appendChild(bodyTd);
                bodyTd.className = "body_td";
            }
        }
    };

