//ES for DOM 쉽게 관리할 수 있는 for ~ in ~ of ~ Each
const study = ['html','css','javascript','desing']
// 기본 for 문법 for(변수생성; 조건식; 증강식){실행결과}
/* for(let i=0; i<study.length; i++){ 기본문법
    console.log(study[i])
}*/ 

//for ~in 문법(DOM index number)
/* for(let i in study){
    console.log(i)
}
//for ~of 문법
for(let i of study){
    console.log(i)
} */

const boxA = document.querySelectorAll('.box a')
console.log(boxA)
for(let i in boxA){
    console.log(i) //DOM index+ 기본속성 출력
}
for(let i of boxA){
    console.log(i) // DOM 객체 출력
    i.addEventListener('mouseover',function(){
        console.log(this)
        i.style.backgroundColor = 'aqua'
    })//mouseover den
    i.addEventListener('mouseout',function(){
        console.log(this)
        i.style.backgroundColor = 'coral'
        i.style.color = 'white'
    })//mouse out end
    i.addEventListener('click',function(){
        console.log(this)
        window.alert ('준비중입니다');
    })//click end
}// for of boxA end

//for ~ in인덱스 위주 제어
//for ~ of 객체 위주 제어
//forEach 인덱스, 객체, 배열 동시제어
const num = [20,21,22,23,24,25]
console.log(num)
/*
    객체.forEach(function(객체 매개변수,인덱스 매개변수,배열 매개변수){
        매개변수를 활용한 실행 속성 및 메서드 작성위치
    })
    * 매개변수명은 의미만 맞게 자유롭게 설정 가능.
    * 매개변수 순서에 따라 객체, 인덱스, 배열 지정이니 순서주의!
    * 매개변수 필요한 대상만 작성 가능
*/
//num.forEach(function(t, i, a){}) 더 짧게 줄인것
//num.forEach(function(dom, in, ar){}) 짧게 줄인것
num.forEach(function(target, index, array){
    console.log(target)
    console.log(`inedex = ${index}`)
    console.log(`array = ${array}`)
    console.log('-----------------------------')
    target.addEventListener('mousedown',function(){
        target.style.color = 'blue'
    })
})
