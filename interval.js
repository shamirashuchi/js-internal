//x++ vs ++x
console.log('first');
console.log('second');

let seconds=0;
const timeoutId = setTimeout(() => {
    console.log(seconds++);
    //console.log(++seconds);
    if(seconds==10){
        clearTimeout(timeoutId);
    }
},5000);

//let seconds=0;
//const intervalid = setInterval(() => {
   // console.log(seconds++);
  // console.log(++seconds);
  //  if(seconds===10){
       // clearInterval(intervalid);
   // }
//},1500)

console.log('fourth');
console.log('fifth');