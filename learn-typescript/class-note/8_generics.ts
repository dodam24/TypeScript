// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);  // 숫자 10
// logText('하이');  // 문자열 하이
// logText(true);  // 진위값 true


// 제네릭 기본 문법
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');


// 함수 중복 선언
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }


// 유니온 타입
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);


// 제네릭의 장점
  // 함수를 정의할 때 타입을 명시하는 것이 아닌, 함수를 호출하는 시점에 타입을 정의
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);

// logText('a')
// logText(10)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false }; 

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };


// 제네릭 타입 제한 1
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function(text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength({ length: 10 });


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");