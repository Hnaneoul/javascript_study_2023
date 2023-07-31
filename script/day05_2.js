// 배열과 객체
const a = 1 //상수(변하지 않는 값)
//a = 2 //eroor (상수값을 변경할 때 에러발생)
let b = 2 //변수(변할 수 있는 값)
b += 4 // 새로운 값이 대입될 경우 기존 값 2가 제거되고 4로 새로 대입
console.log(b)

//연관된 데이터 2개 이상을 배열로 담을 수 있다.
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은 ${yoil[1]}요일입니다!`)

const colorArray = ['withe','black','yellow','pink','red']
const weatherArray = ['흐림','맑음','비','눈','태풍']
console.log(colorArray[2], weatherArray[1])
const spancolor = document.querySelector('.color')
const spanweather = document.querySelector('.weather')
console.log(spancolor, spanweather)
spancolor.innerHTML = colorArray[2] + ', ' +colorArray[3]
spanweather.innerHTML = weatherArray[1]

//사이즈, 색상과 같은 연관되지 않은 데이터를 연속된 배열에 묶어서는 안된다.
// 색상 : 빨 ,흰 , 노, 보, 초
// 사이즈: 스몰 , 미디엄 ,라지 ,투라지

let optionArray = new Array(4) // 빈 배열 4자리 준비
console.log(optionArray)  //empty*4
optionArray[0] = 'white'
optionArray[2] = 'M'
console.log(optionArray) // white, M, empty*2

