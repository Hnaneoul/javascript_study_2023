//자바 스크립트 연산자
let a = 10;
let b = 5;
let c = 2;
console.log(`${a}+${b}=${a+b}`) // 덧셈
console.log(a+'+'+b+'='+(a+b)) 
console.log(`${a}-${c}=${a-c}`) // 뺼셈
console.log(`${a}X${c}=${a*c}`) //곱셈
console.log(`${a}/${c}= ${a/c}`) //나눈 몫
console.log(`${a}/${c} = ${a%c}`) //나눈 나머지값
console.log('----------------------------------------------')

//연결연산자
console.log('10'+10)
console.log(10+10)
console.log(typeof(10+10)) //number 숫자
console.log(typeof('10'+10))//string 문자

console.log('--------------------------------------------')
let age = 25
// age = age + 1
age += 1  //age = age + 1
console.log(`${age}살`)
age -=4   //age = age - 1
console.log(`${age}살`)
age *=5   //age = age * 5
console.log(`${age}살`)
age /=2   //age = age / 2
console.log(`${age}살`)
age %=4   //age = age % 1
console.log(`${age}살`)
console.log('-------------------------------------------------')
//복합대입연산자를 이용한 태그 생성 방법
let cart_li = '<ul>' //빈 장바구니 초기
//참기름 1개를 장바구니 담기눌렀을때
cart_li += '<li>참기름1개</li>'
// 베이글을 2개를 추가로 장바구니 담았을때
cart_li += '<li>베이글2개</li>'
// ul태그를 닫게만들때
cart_li += '</ul>'
console.log(cart_li)
console.log('-------------------------------------------------')


//태그 생성메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul')
const cart_contents = document.querySelector('#cart .contents')
cartNewLi.innerHTML = '<li>참기름 1개</li>'
cartNewLi.innerHTML += '<li>베이글 2개</li>'
console.log(cartNewLi)
console.log(cart_contents)
cart_contents.appendChild(cartNewLi)