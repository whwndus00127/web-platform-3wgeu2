window.onload = function() {

    createList('table_Head', result);
    InsertData('table_Body', result);
}

var value = document.querySelector('#value');
var bodyDiv = document.querySelector("#table_Body");
var headDiv = document.querySelector("#table_Head");
var include = document.querySelector("#include");
var absolute = document.querySelector("#absolute");
var ra = document.querySelector("#ra"); var co = document.querySelector("#co"); var re = document.querySelector("#re"); var pr = document.querySelector("#pr");
var btn_Reset = document.querySelector("#btn_Reset");

var info = [
    { rank: 1, company: "Exxon Mobil", revenues: 339938.0, profits: 36130.0, pq_index:0, pq_order:0},
    { rank: 2, company: "Wal-Mart Stores", revenues: 315654.0, profits: 11231.0 , pq_index:1, pq_order:1},
    { rank: 3, company: "Royal Dutch Shell", revenues: 306731.0, profits: 25311.0, pq_index:2, pq_order:2},
    { rank: 4, company: "BP", revenues: 267600.0, profits: 22341.0, pq_index:3, pq_order:3},
    { rank: 5, company: "General Motors", revenues: 192604.0, profits: -10567.0, pq_index:4, pq_order:4 },
    { rank: 6, company: "Chevron", revenues: 189481.0, profits: 14099.0, pq_index:5, pq_order:5},
    { rank: 7, company: "DaimlerChrysler", revenues: 186106.3, profits: 3536.3, pq_index:6, pq_order:6},
    { rank: 8, company: "Toyota Motor", revenues: 185805.0, profits: 12119.6, pq_index:7, pq_order:7},
    { rank: 9, company: "Ford Motor", revenues: 177210.0, profits: 2024.0, pq_index:8, pq_order:8},
    { rank: 10, company: "ConocoPhillips", revenues: 166683.0, profits: 13529.0, pq_index:9, pq_order:9},
    { rank: 11, company: "General Electric", revenues: 157153.0, profits: 16353.0, pq_index:10, pq_order:10},
    { rank: 12, company: "Total", revenues: 152360.7, profits: 15250.0, pq_index:11, pq_order:11},
    { rank: 13, company: "ING Group", revenues: 138235.3, profits: 8958.9, pq_index:12, pq_order:12},
    { rank: 14, company: "Citigroup", revenues: 131045.0, profits: 24589.0, pq_index:13, pq_order:13},
    { rank: 15, company: "AXA", revenues: 129839.2, profits: 5186.5, pq_index:14, pq_order:14},
    { rank: 16, company: "Allianz", revenues: 121406.0, profits: 5442.4, pq_index:15, pq_order:15},
    { rank: 17, company: "Volkswagen", revenues: 118376.6, profits: 1391.7, pq_index:16, pq_order:16},
    { rank: 18, company: "AXA", revenues: 112351.4, profits: 4896.3, pq_index:17, pq_order:17},
    { rank: 19, company: "Crédit Agricole", revenues: 110764.6, profits: 7434.3, pq_index:18, pq_order:18},
    { rank: 20, company: "American Intl. Group", revenues: 108905.0, profits: 10477.0, pq_index:19, pq_order:19},
    { rank: 21, company: "KIA", revenues: 99456.2, profits: 5334.3, pq_index:20, pq_order:20}];

    var test = info[0];

    const newInfo = Object.keys(test).reduce((object, key) => {
        if (!key.includes('pq')) {
          object[key] = test[key]
        }
        return object
      }, {});


    //var copiedKey = Object.assign({}, info);
    

    //const filtered = copiedKey.filter(copiedKey => delete copiedKey.pq_index &&
        //delete copiedKey.pq_order)

        // key 객체의 일부를 result에 저장
        //var result = key.map 
        //(obj => {return {rank : obj.rank}})

        function headerFilter(data, Keys) {
            return data.map((item) => {
                const result = {};
                Keys.forEach(key => result[key] = item[key]);
                return result;
            });
        }

        var result = headerFilter(info, Object.keys(newInfo));

    function createList(position, daTa) {
        titleRow = document.createElement('div');
        titleRow.className = 'title_row';
        for(var i = 0; i < (Object.keys(daTa[i])).length; i++) { // profits 까지만 보여줌
        dataDiv = document.createElement('div');
        document.getElementById(position).appendChild(titleRow);
        titleRow.appendChild(dataDiv);
        dataDiv.className = 'data';
        dataDiv.textContent = Object.keys(daTa[0])[i];
        }
    }

    function InsertData(position, daTa) {
        for(var i in Object.values(daTa)) {
        rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for(var j = 0; j < (Object.keys(daTa[i])).length; j++) { // profits 까지만 보여줌
            dataDiv = document.createElement('div');
            dataDiv = document.createElement('div');
            document.getElementById(position).appendChild(rowDiv);
            rowDiv.appendChild(dataDiv);
            dataDiv.className = 'data';
            dataDiv.textContent = Object.values(daTa[i])[j];
        }
    }
}
    // Option 2의 체크 상태를 전부 삭제
    function option_Reset() {
        ra.checked = false;
        co.checked = false;
        re.checked = false;
        pr.checked = false;
    }


    // 검색 함수
    function search() {
        while (bodyDiv.hasChildNodes())
        {
            bodyDiv.removeChild(bodyDiv.firstChild);
        }
        var value, data = [];
        right = document.querySelector("#right");
        value = document.querySelector("#value").value.toLowerCase(); // 대소문자 구분을 없애기위한
        row = document.querySelectorAll(".row");

    // Option 1
    function option1(value){
        return result.filter(function(x){
            if(include.checked == true) { // 포함 검색 
            return x.rank.toString().includes(value) ||
            x.company.toLowerCase().includes(value) ||
            x.revenues.toString().includes(value) ||
            x.profits.toString().includes(value) 
            }
            else if(absolute.checked == true) { // 완전 일치
            return x.rank.toString() === value ||
            x.company.toLowerCase() === value ||
            x.revenues.toString() === value ||
            x.profits.toString() === value
            }
        });
    }
    // Option 1 결과 data에 대입
    data = option1(value);

        // Option 2를 체크했을 경우 Option 1을 거친 data로 조건문 수행
        function option2(value) {
            return data.filter(function(x) {
                // Option 1_포함검색
                if(ra.checked == true && include.checked == true) {
                    return x.rank.toString().includes(value);
                } else if(co.checked == true && include.checked == true) {
                    return x.company.toLowerCase().includes(value)
                } else if(re.checked == true && include.checked == true) {
                    return x.revenues.toString().includes(value)
                } else if(pr.checked == true && include.checked == true) {
                    return x.profits.toString().includes(value)
                
                    // Option 2_완전일치
                } else if(ra.checked == true && absolute.checked == true) {
                    return x.rank.toString() === value 
                } else if(co.checked == true && absolute.checked == true) {
                    return x.company.toLowerCase() === value 
                } else if(re.checked == true && absolute.checked == true) {
                    return x.revenues.toString() === value 
                } else if(pr.checked == true && absolute.checked == true) {
                    return x.profits.toString() === value 
                } 
            });
        }

        console.log(data);
        
        
        // Option 1로만 검색할 경우
        if(value.length > 0 && ra.checked == false && co.checked == false && re.checked == false && pr.checked == false) {
        data = option1(value);
        InsertData('table_Body', data);
    } 
    // Option 2를 통해서 검색할 경우
    else if (value.length > 0 && (ra.checked == true || co.checked == true || re.checked == true || pr.checked == true)) {
        data = option2(value);
        InsertData('table_Body', data);
    } else {reset(); // 입력값이 없을경우 초기데이터 출력
    }
}
    // 입력값이 없을때 초기 데이터를 보여주는 함수
    function reset() {
    while (bodyDiv.hasChildNodes())
        {
            bodyDiv.removeChild(bodyDiv.firstChild);
        }
        InsertData('table_Body', result);
    }




