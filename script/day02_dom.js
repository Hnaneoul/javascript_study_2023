// dom == document dbject model
// 자바스크립트 = 객체지향언어
// bom = browser object model 웹 브라우저의 기본 객체
// let hello = 'hello js';
// // window.alert(hello);
// // window.prompt('1+1?');
// // window.alert('정답은'+qa+'입니다');
// let ox = window.confirm('자바스크립트는 객체지향언어다.');
// // 확인 = true(참), 취소=false(거짓)
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언 키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1')
console.log(btn1);
btn1.style.color = 'red';
const login = document.getElementById('login')
console.log(login)
login.style.fontSize = '200%';
login.style.padding = '30px';
login.style.background = 'lightblue';
const payBtn = document.getElementById('pay')
console.log(payBtn)
const price = document.getElementById('price')
console.log(btn1, login, payBtn, price)

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first')[0]
const li_second = document.getElementsByClassName('second')[0]
const li_last = document.getElementsByClassName('last')[0]
console.log(li_first, li_second, li_last)
console.log(li_first)

// 태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aaa = document.getElementsByTagName('a');
console.log(header, h1, nav, aaa);
console.log(aaa[1])

// innerHTML속성 활용
// 객체.속성 //읽기
// 객체.속성 = 대입값 //수정
console.log(header.innerHTML) //undefined
console.log(header[0].innerHTML)
console.log(h1[0].innerHTML)
console.log(btn1.innerHTML)

h1[0].innerHTML = 'sadmwkfn'
console.log(h1[0])
login.innerHTML = '반품하기' //빈문자열 == 문자열을 비운다.(삭제)
payBtn.innerHTML = '팔기<br>사기'

nav[0].style.backgroundColor = 'lightpink';
nav[0].style.border = '2px solid black'
nav[0].style.fontSize = '3rem'
nav[0].style.padding = '20px'
nav[0].style.transform = 'rotate(10deg)'
nav[0].style.transform = 'skew(40deg)'
nav[0].style.background = 'linear-gradient(90deg,pink,brown)'
