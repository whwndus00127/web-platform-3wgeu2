// onload 함수
window.onload = function () {
  createList("table_Head", result); // 테이블 헤드 생성
  InsertData("table_Body", result); // 테이블 바디 생성
  check_Default.checked = true; // 초기 체크 기본값 true
  checkArr.push(check_Default.value); // 체크 기본값 체크 배열에 push
  title_Sort = document.querySelectorAll(".title_data");

  title_Sort[1].addEventListener('click', function() {
    w3.sortHTML('#table_Body', '.row', '.data:nth-child(2)')
  })
}
//w3.sortHTML('#table_Body', '.row', '.data')
var value = document.querySelector("#value");
var bodyDiv = document.querySelector("#table_Body");
var headDiv = document.querySelector("#table_Head");
var include = document.querySelector("#include");
var absolute = document.querySelector("#absolute");
var op2_checkbox = document.querySelectorAll(
  "input[type=checkbox][name=option2]"
);
var btn_Reset = document.querySelector("#btn_Reset");
var checkArr = new Array();
var check_Default = op2_checkbox[0]; // 체크박스의 기본값 지정
var btn_sort = document.querySelector("#rank_Sort")
// Ctrl 키 클릭 시 옵션 숨기기 / 펼치기
window.addEventListener('keyup', e => {
  var key = e.keyCode;
  var fieldset = document.querySelector('.option_Field');
  if(fieldset.style.display != 'none' && key == 17) {
    w3.hide('fieldset');
  } else{
    w3.show('fieldset');
  }
})
// 객체
var info = [
  {
    rank: 1,
    company: "Exxon Mobil",
    revenues: 339938.0,
    profits: 36130.0,
    pq_index: 0,
    pq_order: 0,
  },
  {
    rank: 2,
    company: "Wal-Mart Stores",
    revenues: 315654.0,
    profits: 11231.0,
    pq_index: 1,
    pq_order: 1,
  },
  {
    rank: 3,
    company: "Royal Dutch Shell",
    revenues: 306731.0,
    profits: 25311.0,
    pq_index: 2,
    pq_order: 2,
  },
  {
    rank: 4,
    company: "BP",
    revenues: 267600.0,
    profits: 22341.0,
    pq_index: 3,
    pq_order: 3,
  },
  {
    rank: 5,
    company: "General Motors",
    revenues: 192604.0,
    profits: -10567.0,
    pq_index: 4,
    pq_order: 4,
  },
  {
    rank: 6,
    company: "Chevron",
    revenues: 189481.0,
    profits: 14099.0,
    pq_index: 5,
    pq_order: 5,
  },
  {
    rank: 7,
    company: "DaimlerChrysler",
    revenues: 186106.3,
    profits: 3536.3,
    pq_index: 6,
    pq_order: 6,
  },
  {
    rank: 8,
    company: "Toyota Motor",
    revenues: 185805.0,
    profits: 12119.6,
    pq_index: 7,
    pq_order: 7,
  },
  {
    rank: 9,
    company: "Ford Motor",
    revenues: 177210.0,
    profits: 2024.0,
    pq_index: 8,
    pq_order: 8,
  },
  {
    rank: 10,
    company: "ConocoPhillips",
    revenues: 166683.0,
    profits: 13529.0,
    pq_index: 9,
    pq_order: 9,
  },
  {
    rank: 11,
    company: "General Electric",
    revenues: 157153.0,
    profits: 16353.0,
    pq_index: 10,
    pq_order: 10,
  },
  {
    rank: 12,
    company: "Total",
    revenues: 152360.7,
    profits: 15250.0,
    pq_index: 11,
    pq_order: 11,
  },
  {
    rank: 13,
    company: "ING Group",
    revenues: 138235.3,
    profits: 8958.9,
    pq_index: 12,
    pq_order: 12,
  },
  {
    rank: 14,
    company: "Citigroup",
    revenues: 131045.0,
    profits: 24589.0,
    pq_index: 13,
    pq_order: 13,
  },
  {
    rank: 15,
    company: "AXA",
    revenues: 129839.2,
    profits: 5186.5,
    pq_index: 14,
    pq_order: 14,
  },
  {
    rank: 16,
    company: "Allianz",
    revenues: 121406.0,
    profits: 5442.4,
    pq_index: 15,
    pq_order: 15,
  },
  {
    rank: 17,
    company: "Volkswagen",
    revenues: 118376.6,
    profits: 1391.7,
    pq_index: 16,
    pq_order: 16,
  },
  {
    rank: 18,
    company: "AXA",
    revenues: 112351.4,
    profits: 4896.3,
    pq_index: 17,
    pq_order: 17,
  },
  {
    rank: 19,
    company: "Crédit Agricole",
    revenues: 110764.6,
    profits: 7434.3,
    pq_index: 18,
    pq_order: 18,
  },
  {
    rank: 20,
    company: "American Intl. Group",
    revenues: 108905.0,
    profits: 10477.0,
    pq_index: 19,
    pq_order: 19,
  },
  {
    rank: 21,
    company: "KIA",
    revenues: 99456.2,
    profits: 5334.3,
    pq_index: 20,
    pq_order: 20,
  },
];
// 객체 복제
let copykey = info.map((obj) => {
  return Object.assign({}, obj);
});
// 객체에서 특정한 데이터를 빼고 생성
var result = copykey.map((obj) => {
  for (k in obj) {
    if (k.includes("pq_")) {
      delete obj[k];
    }
  }
  return obj;
});

// 체크한 값을 배열로 넣어주는 함수
op2_checkbox.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var checkVal = checkbox.value;
    var confirmCheck = checkbox.checked;
    // 체크를 전부 해제 시 경고문 + 강제 체크
    if (confirmCheck == false && checkArr.length == 1) {
      checkArr.push(check_Default.value);
      check_Default.checked = true;
      alert("Option 2는 최소 조건이 1개 이상입니다.");
    }
    if (confirmCheck == true) {
      checkArr.push(checkVal);
    } else {
      checkArr.splice(checkArr.indexOf(checkVal), 1);
    }
    console.log("현재 검색필터 : " + checkArr);
  });
});
// 초기 헤드 삽입
function createList(position, daTa) {
  titleRow = document.createElement("div");
  w3.addClass(titleRow, 'title_row');
  for (var i = 0; i < Object.keys(daTa[i]).length; i++) {
    dataDiv = document.createElement("div");
    document.getElementById(position).appendChild(titleRow);
    titleRow.appendChild(dataDiv);
    w3.addClass(dataDiv, 'title_data');
    dataDiv.textContent = Object.keys(daTa[0])[i];
  }
}
// 초기 데이터 삽입
function InsertData(position, daTa) {
  for (var i in Object.values(daTa)) {
    rowDiv = document.createElement("div");
    w3.addClass(rowDiv, 'row');
    for (var j = 0; j < Object.keys(daTa[i]).length; j++) {
      dataDiv = document.createElement("div");
      dataDiv = document.createElement("div");
      document.getElementById(position).appendChild(rowDiv);
      rowDiv.appendChild(dataDiv);
      w3.addClass(dataDiv, 'data');
      dataDiv.textContent = Object.values(daTa[i])[j];
    }
  }
}
// 검색창 키 클릭 이벤트
value.addEventListener('keyup', function() {

  var x = event.keyCode;
  if ((x > 8 && x < 17) || (x > 17 && x < 32) || (x > 33 && x < 48) || (x > 90 && x < 146)) {
    alert("숫자 및 문자만 입력할 수 있습니다.");
    return;
  }
  var value, data, row;
  right = document.querySelector("#right");
  value = document.querySelector("#value").value.toLowerCase(); // 대소문자 구분을 없애기위한
  row = document.getElementsByClassName("row");

  if (value.length >= 1) {
    data = result;
  }

  // 미리 정의한 필터 함수로 data 필터링
  data = option1(value, checkArr);
  console.log(data);

  // 완전일치 체크 --> value 값 없을때 기존 데이터로 복구
  if (value.length == 0) {
    data = result;
    //console.log(data);
  }
  
  search(data, row);
});

// 테이블 갱신 (기존 데이터와 필터 데이터 비교)
function search(filterData, body_row) {
    for(var i = 0; i < result.length; i++) {
    var test = filterData.find(function (element) {
      return result[i].rank == element.rank;
    })
    if(test != undefined){ // undefined 항목에만 display : none 적용
    //body_row[i].style.display = "table";
    w3.addStyle(body_row[i], 'display', 'table');
    } else {
      w3.addStyle(body_row[i], 'display', 'none');
    }
  }
}

// checkbox Option
function option1(value, chArr) {
    let a = result.filter(function (obj) {
      for (key in obj) {
        for (var i = 0; i < chArr.length; i++) {
          let check_Data = obj[chArr[i]].toString().toLowerCase();
          let check_Search = include.checked
            ? check_Data.includes(value)
            : check_Data === value;
          if (check_Search) return true;
        }
      }
      return false;
    });

    return a;
  }
