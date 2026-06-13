const students=[]
function addstudent(name,score){
    score=Number(score)
    score=score ?? 0
    name=name.trim().toUpperCase();
    students.push({name,score})
}
// grade
function getgrade(){
   return students.map((students)=>{
        let grade="f"
        if(students.score>=90) grade="A"
        else if(students.score>=75) grade="B"
        else if (students.score>=65) grade="C"
        else if (students.score>=35) grade="D"
        return {...students,grade}
        
    })
}

// top score
function getTopScore(){
    return students.filter((students)=>students.score>=90)

}
// /search
function search(name){
    return students.find((students)=>students.name==name)
    
}
// check failure
function cheackfailures(){
   return students.some((students)=>students.score<35)
   document.write("there is a failure")

}