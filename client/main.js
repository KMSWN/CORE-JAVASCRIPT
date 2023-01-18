// Asynchoronous Javascript And XML : Ajax
// 비동기 통신

//JSON.parse() - 객체화 명령어
//JSON.stringify() - 문자화 명령어

//post 생성, get 가져오기, put 업데이트, delete 삭제

import { insertLast, xhrData } from "./lib/index.js"



/* 

xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result) => {
    insertLast('body', JSON.stringify(result))
  },
  (failResult) => {
   insertLast('body', '데이터로딩에 실패했습니다.')
  }
)

 */