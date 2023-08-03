//if 2단, 3단 이상 조건식 여러개 작성하는 방법
/*
    if(조건식1){
        조건식1 참일경우 실행
    }else if(조건식2){
        조건식1 거짓이고 조건식2 참일경우 실행
    }else if(조건식3){
        조건식1, 조건식2가 거짓이고 조건식3이 참일경우 실행
    }else{
        모든 조건식이 거짓일때 실행
    }
*/
/*const a = 49
if(a>0 && a<11){
    console.log('a는 1~10사이의 값이다.')
}else if(a>10 && a<51){
    console.log('a는 11 ~ 50사이 값이다')
}else{
    console.log('a는 조건 밖 값을 가지고 있다.')
}*/  // = a는 11 ~ 50사이 값이다


//경품 추첨기
// 추첨번호를 입력받고 추첨번호에 따라 상품이 출력
const lucky = Number(window.prompt('당신의 추첨번호는?'))
if(lucky === 1){
    console.log('냉장고')
}else if(lucky === 2){
    console.log('세탁기')
}else if(lucky === 3){
    console.log('컴퓨터')
}else{
    console.log ('꽝')
}