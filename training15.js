//training15
//아래의 코드를 분석해보자.
const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지"

//문자열을 split하는 함수. 문자열의 내장 함수인 split()을 사용한다.
//split()의 반환값은 배열이다.
// 해당 문자열의 ' ', 공백(스페이스) 기준으로 문자열을 쪼개어 배열result에 넣고 그것을 반환한다.
function splitString(stringParams) {
  let result = stringParams.split(' ');
  return result;
}
//문자열 묶음 배열을 하나로 합치고 이를 매개변수로 쓸 수 있는 콜백함수.
//절차상 마지막 단계에 매개변수로 받은 callback을 함수로 사용, 해당 함수에 하나로 합친 문자열을 매개변수로 줌.
//return을 사용하지 않고 적용했다.
function appendString(stringArray, callback) {
  let body = "";
  stringArray.forEach(function(element) {
    body = body + element;
  });
  callback(body);
}

let bodyTemplate = ``;
//기본 생플 문자열을 쪼갠 후, 그것을 다시 하나로 묶고 이를 사용하여 콜백함수를 쓰게 했다. example과의 차이는 받은 문자열에 공백이 없다는 것.
let resultCase = appendString(splitString(stringExample), function(body) {
  //합친 문자열을 출력
  console.log(body);
  //합친 문자열을 인덱스 0부터 티라는 글자가 있는 인덱스를 지정(시작과 끝을 지정, 끝의 경우 지정된 인덱스의 + 1을 해야 해당 인덱스까지 적용)
  //지정된 문자열을 bodyTemplate에 더함
  bodyTemplate += body.substring(0, body.indexOf("티") + 1);
  //수정된 bodyTemplate를 출력
  console.log(bodyTemplate);
});

//HTML태그 형식으로 작성하는 함수. 매개변수는 해당 태그의 컨텐츠로 할당된다.
function elementMaker(string) {
  return `<div>${string}</div>`;
}
//콘솔 로그에 지정한 템플릿을 넣는 구문. 
console.log(elementMaker(bodyTemplate));
