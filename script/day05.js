let a = 10 //숫자데이터
let b = '10' //문자데이터 
let total = a+b //숫자+문자 = 문자 -> 결과값 : 1010
// 암시적 형변환(자바스크립트 자동으로 데이터변환(기본))
console.log(`total >> ${total}`)
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`)
console.log('--------------------------------------------------------')
//명시적 형변환(문자>숫자, 숫자>문자), 개발자가 직접 데이터형식결정
console.log(`b=${typeof(b)}, b ${b+1}`)
// Number() == 형변환 메서드
// 괄호 안에 작성한 데이터를 숫자 데이터로 변환한다.
// 메서드를 사용할 때만 일회성으로 숫자데이터로 인식한다.
// 일회성의 불편함을 해소하기 위해 변환한 데이터를 다른 변수에 대입해서 일반적으로 사용한다.
console.log(`b=${typeof(Number(b))}, b = ${typeof(b)}`) //문자로 10
let = c = Number(b) //b를 넘버로 변환해서 c로 이식한것 
console.log(`c=${typeof(c)}, c=${c+1}`) //결과적으로 c+1 = 11이된다
console.log(`c=${typeof(c)}, c=${c}, a+c=${a+c}`) // a+c = 20
console.log('--------------------------------------------------------')
// const d = Number(window.prompt('1+1=?')) 다시켜기
// console.log(`d=${d},${typeof(d)}`) ㅇㅇ
// Number 메서드는 객체없이 사용가능하다.
// 그래서 다른 메서드를 괄호안에 넣어 사용할 수 있다.
//예) Number(객체.메서드())
console.log('--------------------------------------------------------')
const userInput = document.querySelector('#user')
const resultBtn = document.querySelector('#result')
console.log(userInput, resultBtn) //DOM*2 출력

//동작 이벤트 없이 input의 값 확인은 초기값만 인시한다.
//inptu value의 값은 숫자데이터로 입력해도 문자데이터로 자동 암시적 형변환 된다.
userInput.value = 1234 //초기값 대입
console.log(`userInput typeof=${typeof(userInput.value)}`)
console.log(`userInput value=${userInput.value}`)

let userInputNumber = Number(userInput.value)//숫자로 형변환한 userInput
console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
console.log(`userInputNumber value = ${userInputNumber}`)
//버튼 클릭 기준 input의 현재값을 파악 후 결과 출력하기
resultBtn.addEventListener('click',function(){
    userInputNumber = Number(userInput.value) 
    console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
    console.log(`userInputNumber value = ${userInputNumber}`)
})
console.log(userInputNumber +1 )
//버튼 클릭시 input 값에 +1결과 콘솔에 출력
