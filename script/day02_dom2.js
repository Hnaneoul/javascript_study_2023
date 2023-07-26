//getElement.. 방식
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1')
const contentsCls = document.getElementsByClassName('contents')
const boxId = document.getElementById('box')
const aTag = document.getElementsByTagName('a')
const afirst = document.getElementsByTagName('first')
const alast = document.getElementsByTagName('last')
console.log(mainTag, hTag[0] , contentsCls[0] , boxId, afirst, alast);
console.log(aTag, aTag[0], aTag[1], aTag[2])
// querySelector.. 방법
const mainTagQ = document.querySelector('main')
const hTagQ = document.querySelector('h1')
const contentsClsQ = document.querySelector('.contents')
const boxIdQ = document.querySelector('#box')
const aTagQ = document.querySelectorAll('a')
const afirstQ = document.querySelector ('.first')
const alastQ = document.querySelector ('.last')
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ, afirstQ, alastQ)
console.log(aTagQ)