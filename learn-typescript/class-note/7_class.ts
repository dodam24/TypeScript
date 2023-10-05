class Person {
  private name: string;  // 해당 클래스 안에서만 사용 가능
  public age: number;
  readonly log: string;  // 읽기만 가능, 값 변경 불가

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - Hook 기반의 함수형 코드 
function App() {
  return <div>Hello World</div>
}

// Vue 컴포지션 API
new Vue({
  el: '',
  setup() {

  }
})