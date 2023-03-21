import fileSystem from 'fs';
import http from 'http';
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
const mainPage = `
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
  <form action="cd" method="GET">
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
  </div>
</body>
</html>
`
const server = http.createServer(function(request, response) {
  
  if(request.method === "GET" && request.url === "/"){
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(mainPage);
    response.end();
  }
})
server.listen(4080);
