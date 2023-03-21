//파일시스템(줄여서 fs)을 fileSystem이라는 이름으로 import
import fileSystem from 'fs'
//저장할 데이터 형식
let name = "DaeGonChoi";
//컴퓨터의 날짜를 가져오는 객체 선언
let date = new Date();
let fileName = date.getFullYear() + name; //파일이름에 연도와 이름을 붙이는 방식.
//굳이 위의 방식을 하지 않고 직접 넣을수도 있다. 형식은 암묵지가 허락하는 한 자기 마음대로. RETURN이 문자열이기만 하면 된다.
let year = "2023";
let month = "03";
let day = "20";
let fileMyName = year + month + day + "-" + name;

/* 
기본 작성방식
fs.writeSync(fd, buffer, offset[, length[, position]])
fd - 파일의 경로, file directory를 뜻한다.
buffer - 작성할 파일 컨텐츠, 내용.
 */

//파일을 동기방식으로 작성하라는 함수.Sync이 동기방식이다.
fileSystem.writeFileSync("./" + fileName + ".txt", name); 
fileSystem.rmSync("./2023DaeGonChoi.txt");




