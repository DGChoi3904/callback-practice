//CommonJS 방식

// 리터럴로 지정되는 경우, 파일의 이름이 없을 뿐, 파일로서 정의된다.(물론 직접 지정할 경우 문제가 난다.)
/*
//객체 literal 방식으로 export하는 것.
module.exports = {
  a : "this is A Data", 
}

//간접 지정방식

const a = {
  a : "this is A data",
}

module.exports = a;
*/
//ESM 방식
const a = {
  a: "this is A data",
}

export default a;
