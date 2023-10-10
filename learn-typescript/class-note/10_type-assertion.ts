// 타입 단언(type assertion)

var a;
a = 20;
a = 'a'
var b = a as string;


// DOM API 조작 - HTML의 요소들을 JS에서 제어하기 위한 명령들의 집합
// <div id="app">hi</div>

var div = document.querySelector('div');
if (div) {
  div.innerText 
}