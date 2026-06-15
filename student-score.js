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
function getname(firstname,lastname){
const name=(firstname+''+lastname)
console.log(name)
}
getname("manoj","thanjai")