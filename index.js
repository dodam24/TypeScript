// array 타입 지정
var name = ['kim', 'park']; // 해당 변수에는 string이 담긴 array만 들어올 수 있음
// object 타입 지정
var 이름 = { name: 'kim' };
var name = {}; // ? 를 입력하면 name 속성이 옵션임을 나타냄
// Union type : 다양한 타입이 들어올 수 있음
var name = 123; // string 혹은 number가 들어올 수 있음
var name = 123;
// 함수 타입 지정
function age(x) {
    return x * 2;
}
var john = [123, true];
var john = { name: 'kim' };
// class 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this, name = name;
    }
    return User;
}());
