// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);


// 유니온 타입(Union Type): 변수의 값이 여러 타입을 가지는 경우에 사용
  // 파이프(|) 기호로 각 타입을 구분하며, 'A' 또는 'B' 타입이 될 수 있음을 의미한다.
var seho: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


// 인터페이스를 유니온 타입으로 정의하는 경우, 타입의 공통된 속성에만 접근 가능하다.
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O 정상 동작
  // someone.skill; // X 타입 오류
  // someone.age; // X 타입 오류
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '캡틴', age: 100});


// 인터섹션 타입
function askSomeone(someone: Developer & Person) {
  someone.name;  // O 정상 동작
  someone.skill;  // O 정상 동작
  someone.age;  // O 정상 동작
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });
// askSomeone({ name: '캡틴', age: 100});

// var seho: string | number | boolean;
// var capt: string & number & boolean;