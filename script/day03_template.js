//getElemnt 객체방법
const ulWrap = document.getElementById('wrap')
const liTag = document.getElementsByTagName('li')
const aTag = document.getElementsByTagName('a')
console.log(ulWrap, liTag[0], aTag[0])
console.log(liTag[0],liTag[1],liTag[2],liTag[3])
// QuerySelector 객체방법
const ulWrapQ = document.querySelector('#wrap')
const liTagQ = document.querySelectorAll('li')
const aTagQ = document.querySelectorAll('a') // ('#wrap li a') 라고 써도됨
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)') //이런거도 됨
console.log(ulWrapQ)
console.log(liTagQ[0],liTagQ[1],liTagQ[2],liTagQ[3],)
console.log(aTagQ[0],aTagQ[1],aTagQ[2],aTagQ[3],)
console.log(aTag, aTag[0], aTagQ, aTagQ[0])
console.log(aTagQ1)
console.log('------------------------------------------------------------')
console.log('li태그 변수 값은' + liTagQ[0] + '입니다!')
console.log('1+1= ' + (1+1) + ' 입니다. ')
console.log('7x4= ' + (7*4) + ' 입니다. ')
console.log(`1+1= ${1+1} 입니다. `)
console.log(`7x4= ${7*4} 입니다. `)
console.log(`li태그 변수 값은 ${liTagQ[0]} 입니다!`)