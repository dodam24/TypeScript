// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];   // Array에는 number 타입만 들어갈 수 있음
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]
let items: number[] = [1,2,3];


// 배열은 2가지 형태로 선언 가능
// 1. let arr: Array<number> = [1,2,3];  // 제네릭 사용
// 2. let arr: number[] = [1,2,3];