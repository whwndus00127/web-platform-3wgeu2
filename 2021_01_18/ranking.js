let dataDiv, rowDiv;
var list = document.querySelector("#select"); // 검색 옵션 리스트
var rightDiv = document.getElementById('right');

var key = [
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
    { rank: 20, company: "American Intl. Group", revenues: 108905.0, profits: 10477.0, pq_index:19, pq_order:19}];

    /*var ul = document.getElementById('list');
    document.getElementById('value2').addEventListener
    ('keyup', function() {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        var find = this.value;
        find = find.toUpperCase();

        var search2 = key.filter(function(x){
            return x.company.toUpperCase().includes(find)
        });

        search2.forEach(function(x) {
           var li = document.createElement('li');
            li.innerHTML = x.company;

            ul.appendChild(li);
        });
    });*/

    //function
    function createList(position) {
        rowDiv = document.createElement('div');
        rowDiv.className = 'title_row';
        for(var i in Object.keys(key[0])) {
        dataDiv = document.createElement('div');
        document.getElementById(position).appendChild(rowDiv);
        rowDiv.appendChild(dataDiv);
        dataDiv.className = 'data';
        dataDiv.textContent = Object.keys(key[0])[i];
        }
    }

    function InsertData(position) {
        for(var i in Object.values(key)) {
        rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for(var j = 0; j < Object.values(key[j]).length; j++) {
            dataDiv = document.createElement('div');
            document.getElementById(position).appendChild(rowDiv);
            rowDiv.appendChild(dataDiv);
            dataDiv.className = 'data';
            dataDiv.textContent = Object.values(key[i])[j];
        }
    }
}

    // 검색 함수
    function search() {
        var value, data, row, i;

        value = document.querySelector("#value").value.toUpperCase(); // 대소문자 구분을 없애기위한
        row = document.querySelectorAll(".row");

        for(i=0; i < row.length; i++) {
            data = row[i].querySelectorAll(".data");
            // data 셀에 들어있는 값을 변수 data에 대입
            if(data[list.options[list.selectedIndex].value].textContent.toUpperCase().indexOf(value) > -1){ // 검색 옵션의 값에 따라 검색하기
                row[i].style.display = "table"; // 검색 결과
            } else {
                row[i].style.display = "none"; // 결과를 제외한 요소 삭제
            }
    }
}



    // left
    createList('left');
    InsertData('left');

    // right
    createList('right');
    InsertData('right');
