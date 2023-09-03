function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 20);


// 컴파일(compilie): ts 파일을 js 파일로 변환하는 작업
// 1. node -v : 노드 버전 확인
// 2. npm i typescript -g : tsc 명령어를 실행하기 위해 타입스크립트 라이브러리를 시스템 내부에 설치
// 3. tsc index.ts : ts 파일을 js 파일로 컴파일