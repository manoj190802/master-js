// const students=[]
// function addstudent(name,score){
//     score=Number(score)
//     score=score ?? 0
//     name=name.trim().toUpperCase();
//     students.push({name,score})
// }
// // grade
// function getgrade(){
//    return students.map((students)=>{
//         let grade="f"
//         if(students.score>=90) grade="A"
//         else if(students.score>=75) grade="B"
//         else if (students.score>=65) grade="C"
//         else if (students.score>=35) grade="D"
//         return {...students,grade}
        
//     })
// }

// // top score
// function getTopScore(){
//     return students.filter((students)=>students.score>=90)

// }
// // /search
// function search(name){
//     return students.find((students)=>students.name==name)
    
// }
// // check failure
// function cheackfailures(){
//    return students.some((students)=>students.score<35)
   

// }



// Functiomal programming
// const person={
//     name:"john",
//     age:30,
    
// }
// function getperson(){
//     console.log(person.name,person.age,person)
// }
// getperson()

// arguments
// const person1={
//     name:"Manoj",
//     age:24,
//     place:"Thanjavur"
// }
// const person2={
//     name:"Mano",
//     age:24,
//     place:"keralam"
// }

// function printperson(person1){
//     console.log(person1.name)
//         console.log(person1.age)
//             console.log(person1.place)


// }

// printperson(person1)


// default parameters
// const person1={
//     name:"Manoj",
//     age:24,
//     place:"Thanjavur"               

// }
// function printperson(name="divya",age=24,place="Thanjavur"){
//     console.log(name)
//     console.log(age)
//         console.log(place)

// }
// printperson()


// spread operator or rest operator
// const person1={
//     name:"Manoj",
//     age:24,
//     place:"Thanjavur"       
// }
// const person2={
//     name:"Mano",
//     age:24,
//     place:"keralam" 
// }

// function printpersons(...arg){
//     console.log(arg)
// }
// printpersons(person1.name,person1.age,person1.place)
// printpersons(person2.name,person2.age,person2.place)

// concatination
// function getname(firstname,lastname){
// const name=(firstname+''+lastname)
// console.log(name)
// }
// getname("manoj","thanjai")

// returning function
// function getname(firstname,lastname){
//     return {firstname,lastname}

// }
// let fullname=getname("manoj","thanjai")
// console.log(fullname)

// arrow function
// const getname =(firstname,lastname) => firstname+''+lastname

// let fullname=getname("manoj","Thanjavur")
// console.log(fullname)

// scope
// const name="manoj from Thanjavur"
// function getname(){
//     const name="manoj from kerala"
//     console.log(name)
//     // block scope
//     if(true){
//         let name="manoj from mudachikkadu"
//         console.log(name)
//     }

// }
// getname()
// console.log(name)

// callback function
// setTimeout(()=>{
//     console.log("hii")
// },3000)

// setTimeout(()=>{
//     console.log("heloooo")
// },9000)

// function welcome(name, callback){
//     console.log("welcome"+name)
//     callback()
// }
// function sayhii(hello){
//     console.log("goodbye")
// }
// welcome("manoj",sayhii)

// function addstudent(name,callback){
//     setTimeout(()=>{
//         console.log("Name is "+name)
//     },2000)
//     callback()
// }
// function getscore(){
//     setTimeout(()=>{
//         console.log("score is 490")

//     },3000)
// }
// addstudent("manoj",getscore)


// array methods
// let colors=["red","green","yellow"]
//     colors[1]="blue"
// console.log(colors)

// length
// let colors=["red","yellow","green","black","pink"]
// console.log(colors.length)

// if(colors.length >9){
//     console.log("colors are 5")

// }
// else{
//     console.log("colors are less than 5")
// }


// push
// const colors=["red","yellow","green"]
// colors.push("blue")
// console.log(colors)

// pop  is used to remove the last element from the array
// colors.pop()
// console.log(colors)

// shift is used to remove an element at the beginning of the array
// colors.shift()
// console.log(colors)

// indexof is used to find the index of an element in the array
// console.log(colors.indexOf("yellow"))

// forEach is used to iterate over the array
let numbers=[1,2,3,4,5,6,7,8,9]
let total=0
numbers.forEach(function(element){
    total+=element
})
console.log(total)