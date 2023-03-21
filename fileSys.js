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
const dirRaw = fileSystem.readdirSync("./", {withFileTypes : true});
const currentDir = {};
let directory = [];
let file = [];
//for-in문 사용
/*
for(let dirRawKey in dirRaw){
  console.log(dirRaw[dirRawKey]);
  if(dirRaw[dirRawKey].isDirectory()){
    directory.push(dirRaw[dirRawKey].name);
  } else if(dirRaw[dirRawKey].isFile()){
    file.push(dirRaw[dirRawKey].name);
  }
  currentDir.directory = directory;
  currentDir.file = file;
}
console.log(dir);
*/
//forEach 사용
dirRaw.forEach((Dirent)=>{
  console.log(Dirent);
  
  if(Dirent.isDirectory()){
    directory.push(Dirent.name);
  } else if(Dirent.isFile()){
    file.push(Dirent.name);
  }
  currentDir.directory = directory;
  currentDir.file = file;
})

console.log(currentDir);
console.dir(dirRaw[0]);

