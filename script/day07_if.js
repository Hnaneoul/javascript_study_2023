//전역변수, 지역변수(함수 내/외부 생성한 변수 위치 차이)
let b = 20
let c = 30
function test(){
    let a= 10
    console.log(a+b) // 결과값 : 30출력
}
test()
// console.log(a) //집안(function)에서 태어난 a는 집(function)밖에서는 출력안됨 그래서 에러뜸 
// console.log(a+b) // 동일 사유 에러
console.log(b+c) // 결과값 : 50 출력
console.log('---------------------------------------------')
//조건문 - 논리데이터 참(true), 거짓(false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(5==7) //false
console.log(num1 < num2) // true
console.log(num1==num3) // true  num1은 숫자/ num3은 문자인데도 같은 이유는 (데이터타입)은 인식을 못하고 (데이터값) 만 인식해서 같다고 함
console.log(num1===num3) //false (===는 데이터타입까지 구분)
console.log(num1!==num3) // num1은 num3하고 다르다??/ 결과값 : true!(응 달라! 데이터타입구분O)
console.log(num1>=num2) // false
console.log(num1<=num2) // true
console.log('-----------------------------------------')
//조건문
//if(조건식){조건식이 참일 때 실행결과} 조건식종료
//상황1. 주말에 [날씨가 좋으면](조건) [등산가자](결과)!
let weather = ['비','맑음','흐림']
if(weather[1]==='맑음'){
    console.log('등산을 가자')
}
console.log('-----------------------------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행')} 
// O , d는 true가 맞으니 ===true와 데이터값도 맞아서 출력되는게맞다
if(f>10){console.log('실행2')} 
// X , 10초과라는 조건에 f(10)은 초과x 맞지않는다
if(g<=20){console.log('실행3')}
// O , 20이상이라는 조건에 g는(20) 포함되서 맞다
if(e!=true){console.log('실행4')}
// O , e는 false이고  !=는 다르다 e와 !=true는 다르니까 O 
console.log('-----------------------------------------')

//관리자만 접속할 수 있는 페이지
//관리자 아이디일 경우만 접속가능(접속 후 인사말 출력)
/* const userId = window.prompt('아이디를 입력하세요')
if(userId == 'admin'){
    window.alert('관리자님 환영합니다')
} */
// 사용자의 나이를 입력받고 10살 이하라면 '놀이기구 탑승불가'
/* const userAge = Number(window.prompt('나이를 입력하세요'))
if(userAge <= 10){
    window.alert('탑승불가')
}
if(userAge > 10){
    window.alert('탑승가능')
} */

const userPrint = window.confirm('인쇄할까요')
if(userPrint === true){
    window.print()
}