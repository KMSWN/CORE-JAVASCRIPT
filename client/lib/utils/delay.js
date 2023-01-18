
import { getNode } from "../dom/index.js";

const first = getNode('.first');

function delay(callback, timeout = 1000){

  setTimeout(callback, timeout);

}

delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
    })
  })
})

// first.style.transform = 'rotate(360deg)'
// first.style.top = '0px';


function delayP(timeout = 1000){

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve('성공!');
    }, timeout);
  })
}

console.log(delayP())