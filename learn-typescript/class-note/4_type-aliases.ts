// type vs interface
/*
 * '타입 별칭'과 '인터페이스'의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부
 * 인터페이스는 확장 가능하지만, 타입 별칭은 확장이 불가능
 * 따라서 가능한한 type보다는 interface로 선언해서 사용할 것!
*/

// 인터페이스
interface Person {
  name: string;
  age: number;
}

// 타입 별칭
// type Person = {
//   name: string;
//   age: number;
// }

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {  // function getTodo(todo: { id: string; title: string; done: boolean };)

}