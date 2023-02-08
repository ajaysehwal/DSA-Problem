let str = ["flower","flow","flight"];



for(let i=0;i<str[0].length;i++){
  for(let j=1;j<str.length;j++){
    if(str[0][i]!==str[j][i]){
        console.log(str[0].slice(0,i));
    }
  }
}

  console.log(str[0])
