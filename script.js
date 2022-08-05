// function fetchData(){
//    fetch("https://reqres.in/api/users?page=2")
//    .then(response=>{
//        if(!response.ok ){
//          throw Error("Error")
//        } return response.json();
//          })
//     .then(data =>{
//     console.log(data.data)
//     // return <p>Test Raj</p>
//     return document.querySelector("#app").insertAdjacentHTML("afterbegin","<h1>hello </h1>");
//     //      })
//     })


//     then((data) => {
//         let authors = data;
  
//         authors.map(function(author) {
//           let li = document.createElement('li');
//           let name = document.createElement('h2');
//           let email = document.createElement('span');
//           name.innerHTML = `${author.name}`;
//           email.innerHTML = `${author.email}`;
          
//         li.appendChild(name);
//         li.appendChild(email);
//         list.appendChild(li); 
        
//     // const html = data.data.map(user =>{
//     //     return `
//     //    <div class = "user">
//     //    <p><img src = "${user.avatar}" alt ="${user.first_name}" /> </p>
//     //    <p>Name: ${user.first_name }</p>
//     //    <p>Name: ${user.email }</p>
//     //     </div>
//     //      `;
//     //     })
//     //     .join("");
       
//     //     document.querySelector("#app").insertAdjacentHTML("afterbegin","<h1>hello </h1>");
//     //      })
//     .catch (error =>{
//         console.log(error)
//          });

//    }   

// fetchData();

// function postData(){
//     fetch("https://reqres.in/api/users?page=2",{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json'
//          },
//          body :JSON.stringify({
//         "name" : "morpheus",
//         "job" :"leader"
//     })
//     })
//     .then(response=>{
//         if(!response.ok ){
//             throw Error("Error")
//         }
//       return response.json();
//           })
//     .then(data =>{
//      console.log(data)
//      })
//      .catch (error =>{
//          console.log(error)
//           });
//      }   
//   fetchData();
// call back is a function that is passed as an argument to an another function.
function caluculator(num1,num2){
  let sum = num1 + num2;
  return sum;
}
// here the above the caluculator function num
function display(output){
  console.log(output);
}
let result = caluculator(5,5)
 display(result);
 // java script clousers:
// clousers in a js are combination of a functions bundled together with a refereneces to its surroundoing state.
// example :
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

// array methods in the js
// push and pop shift and unshift are the methods of the array 
const fruits =['banana', 'apple', 'pineapple', 'grapes'] 
fruits.push('manago')// add the mango at the (end of the array) 
fruits.pop()// removes the element at the  (end of the array) 
fruits.unshift('avacado') // add the element at the at beginning of the array 
fruits.shift('')// removes the elememt at the beginning of the array.
fruits[0]= 'kiwi'//  replacing an element to the direct index 
// array splice
// splice method : adding a new items to an aarray 
// slice  method; removing a items of an array.
fruits.splice(2, 0, "Lemon", "Kiwi");
//Note:
//The slice() method creates a new array.

//The slice() method does not remove any elements from the source array.
const citrus = fruits.slice(2)
// merging an two  the arrays 
const animals = ['chetah','lion', 'whales','buffalo']
// const lifecycle = fruits.concat(animals);
// merging the 3 arrays at a time.
const seaanimals= ['fishes','starfish','carabs',] 
const lifecycle= citrus.concat(animals,seaanimals)


// fruits.splice(2,0);

console.log(lifecycle)

// java script misc 
// this keyword.
// var address = {
//   name :'vasu',
//   company : 'ocado',
//   place :'Andhra pradesh',
//   fulladdress : function(){
//     return this.name + isworking  +" "+this.company + "for four years " 
//   }
 
// };
// var fetch = address.fulladdress();
// console.log(fetch)

// creating the react element 
// create-react-app my-react -app 
//  To run this command use cd my-react-app, 
// To excute this command use this npm-start 

// before going the react app 
  // ES6 react had class 
class Rectanagle {
  constructor (height,width){
    this.height= height;
    this.width= width;
  }

};
console.log(Rectanagle.name)