/*
readyState
0: uninstalized
1: loading
2: loaded
3: interactive
4: complete
*/


// 비동기 통신 오픈

// console.log( xhr );


function xhrData(method, url){
  
  const xhr = new XMLHttpRequest();
  
  xhr.open(method, url)

  xhr.addEventListener('readystatechange', () => {
    if(xhr.status >= 200 && xhr.status < 400){
      if(xhr.readyState === 4){
        console.log('통신 성공')
      }
    }else{
      console.log('통신 실패')
    }
  })

// 서버에 요청
  xhr.send();

}