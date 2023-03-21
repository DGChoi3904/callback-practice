function mainPage(setHTMLString){
  let item = "";
  if(typeof (setHTMLString()) === "string"){

    item = setHTMLString();
  } else {
    //문제가 발생시 에러 출력후 함수 실행 정지할 방법
    console.error("Callback 함수의 return값은 문자열이어야 합니다.")
    throw "안의 내용물을 만드는 콜백함수의 Return 값 에러";
    // 점프대상은 함수 경계를 벗어날 수 없습니다?
  }
  let page = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      form {
        width: 200px;
      }
    </style>
  </head>
  <body>
    <form action="cd" method="POST">
    <label for="cd">Search your Dir:</label>
    <input type="text" placeholder="example.txt" name="name" id="cd" required>
    <input type="submit" value="Search"/>
    </form>
    <form action="mkdir" method="GET">
    <label for="mkdir">Write name for the new Directory.</label>
    <input type="text" placeholder="/example" name="name" id="mkdir" required>
    <input type="submit" value="Make Dir">
    </form>
    <form action="rm" method="GET">
    <label for="rm">Write file or directory name you want to delete.</label>
    <input type="text" placeholder="example.txt" name="name" id="rm" required>
    <input type="submit" value="Erease!">
    </form>
    <div id="result">
    <hr>
    ${item}
    </div>
  </body>
  </html>
  `
  return page;
}
/*
//사용 예제.
let htmlPage = mainPage(function(){
  let innerHTMLtext = `
  <ul>
    <li>hello-1</li>
    <li>hello-2</li>
    <li>hello-3</li>
    <li>hello-4</li>
    <li>hello-5</li>
    <li>hello-6</li>
    <li>hello-7</li>
  </ul>
  `
  //반환할 값은 "문자열"일 것.(가능하면 HTML태크 포맷으로)
  return innerHTMLtext;
});

console.log(htmlPage)
*/
export default mainPage;