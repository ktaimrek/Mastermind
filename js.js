

var test0 = "3,0,0,0";

var combi = "3154";
var nbBienMal = 0;
var nbBienBien = 0;


var  test = ""+test0.charAt(0)+test0.charAt(2)+test0.charAt(4)+test0.charAt(6);

var combi2 = combi;
var test2 = test;
for(var i = 0;i<test2.length;i++){
    if(combi2.charAt(i) == test2.charAt(i)){
      nbBienBien++;
      if(i == combi2.length-1){combi2 = combi2.substring(0,i);println(i);}
      else{combi2 = combi2.substring(0,i)+combi2.substring(i+1);}
      if(i == test2.length-1){test2 = test2.substring(0,i);}
      else{test2 = test2.substring(0,i)+test2.substring(i+1);}
      i--;
      j=combi2.length;
    }
}

for(var i = 0;i<test2.length;i++){
  for(var j = 0;j<combi2.length;j++){
    if(combi2.charAt(j) == test2.charAt(i)){
      nbBienMal++;
      if(j == combi2.length-1){combi2 = combi2.substring(0,j);}
      else{combi2 = combi2.substring(0,j)+combi2.substring(j+1);}
      if(i == test2.length-1){test2 = test2.substring(0,i);}
      else{test2 = test2.substring(0,i)+test2.substring(i+1);}
      i--;
      j=combi2.length;
    }
  }
}

console.log(combi+" - "+test);
console.log("nbBienMal : "+nbBienMal);
console.log("nbBienBien : "+nbBienBien);

