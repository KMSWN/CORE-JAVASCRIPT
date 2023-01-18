
import { getNode } from '../dom/getNode.js'
import { isNumber,isObject } from './typeOf.js'



const first = getNode('.first');
const second = getNode('.second');



function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}


// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    second.style.left = '100px';
    delay(()=>{
      first.style.top = '0px';
      second.style.left = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */

/* 
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
  second.style.left = '0px';
})
 */

function delayP(shouldReject = false, timeout = 1000,data = '성공했습니다.', errorMessage = '알 수 없는 오류가 발생했습니다.'){

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}


delayP(false,1000,'진짜 성공','오류가 발생했다!!').then((res)=>{
  console.log(res); // 진짜 성공
})


// delayP()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))







// async await


async function delayA(){
  return '완료'
}

let result = delayA();

console.log(result)














