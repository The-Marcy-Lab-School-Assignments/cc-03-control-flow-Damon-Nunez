//1
function betweenFiveAndTwenty(num){
  if(num > 5 && num <= 20) {
  return true
} else {
return false
}
}
//2
const countFromOne = (int) => {
    for(let i = 1; i < int + 1; i++) {
        console.log(i);
    }
}


//3
function isNegative(num){
  if(num < 0){
      return false
  }else if(num > 0){
      return true
  }
}

//4
function countMultipleofFive(arr){
  for(let i=0; i<arr.length;i++){
     if(i % 5 === 0){
         console.log(i);
     }
  }
}

//5 
function countEvens(){
  
}

console.log(countFromOne(15));
console.log(betweenFiveAndTwenty(18));
console.log(isNegative(-3));
console.log(countMultipleofFive(1,2,3,4,5,6,7,8,9,10));