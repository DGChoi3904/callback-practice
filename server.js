import http from 'http';
//console.dir(http);
const server = http.createServer(function (request, response){
  //createServer()를 호출 할 때, 해당 함수에서 request와 response라는 함수를 전달받는 것을 API에서 확인 할 수 있다.
  //data의 기본형은 줄테니, 나머지는 사용자가 직접 하라는 형식.
  //이것을 인자를 전달받았다 라고 한다.
  //body 작성 구문 예시
  let body = ""; //문자열이라 선언
  body = body + "<!DOCTYPE html>";
  body = body + "<html>";
  body = body + "<head>";
  body = body + "<title>Node.js</title>";
  body = body + "</head>";
  body = body + "<body>";
  body = body + "<h1>Hello World</h1>";
  body = body + "</body>";
  body = body + "</html>";

  //해더 설정 및 응답 종료 구문 아래의 구문은 지정된 사용법에 맞춰줘야 하는 부분이다
  //이 부분이 기본적으로 알아야 하는 작성법.
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(body);
});
server.listen(4080);
