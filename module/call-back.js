//콜백 함수의 개념
//현재까지의 함수 사용방법 콜, 리티럴 리턴지정, 매개변수 받고 수정후 반환
/*
function six(number, append) { // ? 매개변수를 넣으면 매개변수를 수정해 return하는 형식.
  //숫자일때만 리턴하게 설정하기
  if( typeof(number) === "number" && typeof(append) === "number"){ // ? !==으로 할 경우, else에 해야한다.
    return number + append;
  } else { // ? 간단한 방식으로 버그를 잡는 조건문 사용법이다.
    //에러 메세지 출력구문.
    console.error('이 매개변수는 숫자여야 동작합니다.');
  }
  
  // ? 거짓 방식(falsy 방식 작성법)
  
  if( typeof(number) !== "number"){
  } else {
    return number + 1;
  }
  

}
*/
function six(number, append) {
  return number + append;
}
function seven(number, append) {
  return number - append;
}
const a = six(1345, 2); // ? a란 데이터가 변한다.
console.log(a);

//문제, 만일 위와 같이 여러 함수를 계속 추가하게 되어 함수의 갯수가 무한대수만큼 늘어난다면, 어떻게 대처할 것인가.
//위의 방식은 정적(static)으로 정의된 함수
//실행 구문을 먼저 만들어 놓고, 나중에 호출하는 방식
//이를 위해 나온 동적인 작성 방식, Callback 함수가 있다.

function eight(number, append, callback) {
  //함수를 호출 할 때, 추가적으로 작업을 하는 방법(연산 후 알고리즘에 더할 때 쓰인다)
  let a = number + 1;
  let b = append + 2;
  return callback(a, b); // 매개변수에다 값을 더하여 수정된 값으로 callback 함수를 쓰게 함.
}
//이름을 다르게 지정할 수 있는가?
//가능한 것 같다.
/*
function nine(number, numberTwo, actionCall) {
  return actionCall(number, numberTwo);
}
*/
//Callback 함수의 사용 예
console.log(eight(1,2, function(a,b){
  return a + b;
}))
//Callback 함수에서 이전 함수 사용하기 예.
console.log(eight(3,4, seven));

