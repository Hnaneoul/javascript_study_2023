// day02.js
let a = 10;
let b = 1;
let c = 0;
console.log(a);
a = 20;
b = 2;
b = 3; 
a = a+b; // 20+3
c = a+b+c; // 23+3+0
b = a+b+c; // 23+3+26
console.log(a,b,c); // 23,52,26
// ---------------------------------
const birth = 20;
// birth = 30; //살수값 변경 에러
console.log('--------------------------------')
// 문제1. 다음 회원의 정보를 변수로 처리하시오.
// 이름 홍길동
// 나이 : 20
// 생일 : 12월
// 주소 : 인천시 부평구
// 혈액형 : A형
// 위 값을 모두 변수로 개별대입 후 콘솔출력하기
let name = '홍길동';
let age = 20;
const birthday = '12월'
let address = '인천시 부평구'
const blood = 'A형'
console.log('이름 : '+name)
console.log('나이 : '+age)
console.log('생일 : '+birthday)
console.log('주소 : '+address)
console.log('혈액형 : '+blood)