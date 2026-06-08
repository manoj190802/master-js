const students=[]
function addstudent(name,score){
    score=Number(score)
    score=score ?? 0
    name=name.trim().toUpperCase();
    students.push({name,score})
}
// grade
function getgrade(){
    students.map((students)=>{
        let grade="f"
        if(students.score>=90) grade="A"
        else if(students.score>=75) grade="B"
        else if (students.score>=65) grade="C"
        else if (students.score>=35) grade="D"
        return {...students,grade}
        
    })
}