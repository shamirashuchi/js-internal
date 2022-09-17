
function dosomething(){
    console.log('third');
}
//js serial wise chole
console.log('first');
console.log('second');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('response received');
   return response.json();
  })
  .then(json => console.log(json));
//5000 milisecond por asbe
//setTimeout(()=>{console.log('third')},5000);
//error function dileo output e third last e ase
//setTimeout(()=>{console.log('third')});
//third last e ase
//setTimeout(dosomething);
//third third e ase
//dosomething();
//third third e ase
//console.log('third');
console.log('fourth');
console.log('fifth');