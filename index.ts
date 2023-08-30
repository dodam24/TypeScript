// array 타입 지정
let name :string[] = ['kim', 'park'];   // 해당 변수에는 string이 담긴 array만 들어올 수 있음


// object 타입 지정
let 이름 :{ name : string} = { name : 'kim' }
let name :{ name? : string} = {  }   // ? 를 입력하면 name 속성이 옵션임을 나타냄


// Union type : 다양한 타입이 들어올 수 있음
let name :string | number = 123;  // string 혹은 number가 들어올 수 있음


// Type alias : 타입을 변수에 담아서 쓸 수 있음
type Name = string | number;    // 타입명은 보통 대문자로 시작
let name :Name = 123;


// 함수 타입 지정
function age(x :number) :number {  // 해당 함수는 파라미터로 number를 받고, return 값으로 number를 반환
    return x * 2
}


// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];    // 무조건 첫 번째는 number, 두번째는 boolean 값이 들어와야 함
let john :Member = [123, true]


// object에 타입을 지정해야 할 속성이 너무 많을 경우
type Member = {
    [key :string] :string,  // 글자로 된 모든 object 속성의 타입은 :string
}
let john :Member = { name : 'kim' }


// class 타입 지정
class User {
    name;
    constructor(name :string) {
        this.name = name;
    }
}