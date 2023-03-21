import fileSystem from 'fs';
import http from 'http';
import mainPage from './callbacktest.js';
let ownerName = "DGChoi3904";
let filePurpose = "FileSystem Practice";
let fileData = "This is File Ok?"
//let date = new Date();
//let fileName = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}` + "-" + ownerName + "-" + filePurpose;
//console.log(date.getFullYear())
//console.log(date.getMonth())
//console.log(date.getDate());

//fileSystem.writeFileSync("./"+ fileName + ".txt" , fileData );

function makeFile(authorName, fileType, addData){
  
  if(typeof (authorName) === "string" && typeof (fileType) === "string"){
    let date = new Date();
    let fileName = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}` + "-" + authorName;
    let type = "";
    if(fileType === "txt" || fileType === "text"){
      type = type + ".txt";
    }
    return addData(fileName, type);
  } else {
    console.error("파일이름과 확장자는 문자열로 입력해주세요.")
  }
  
}
makeFile(ownerName, "text", (fN, fT) => {
  fileSystem.writeFileSync("./" + fN + fT, "This is Text." );
})
console.log(fileSystem.readdirSync("./", {withFileTypes : true}));

//---------------------------서버 만들기----------------------------

const server = http.createServer(function(request, response) {
  
  if(request.method === "GET" && request.url === "/"){
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(mainPage(function(){
      return "<h1>hello</h1>"

    }));
    response.end();
  }
  if(request.method === "POST" && request.url.startsWith("/cd")){
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(mainPage(function(){
      return "<h2>bye</h2>"
    }));
    response.end();
  }
})
//console.log(mainPage);
server.listen(4080);
