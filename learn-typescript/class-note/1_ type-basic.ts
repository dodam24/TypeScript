// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];   // Array에는 number 타입만 들어갈 수 있음
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]
let items: number[] = [1,2,3];

// TS 튜플
let address: [string, number] = ['gangnam', 100]; // 각 인덱스의 타입이 지정된 배열의 타입을 정의

// TS 객체
// 간단한 객체는 object로 정의
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };
// 좀 더 구체적으로 정의하고 싶을 때, 객체 안에 속성의 타입까지 정의
let person: { name: string, age: number } = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;


// 배열은 2가지 형태로 선언 가능
// 1. let arr: Array<number> = [1,2,3];  // 제네릭 사용
// 2. let arr: number[] = [1,2,3];