//====for preparing IAS exam====
function prepare(){
    setTimeout(()=>{
    console.log("preparing the exam");},50000)
}
function achivingExam(){
    setTimeout(()=>{
    console.log("after achiving the exam");},40000)
}
function GoToInterview(){
    console.log("after inertview achiving");
}
function Clear(){
    console.log("clear IAS preparation");
}
function afterThat(){
     prepare()
     achivingExam()
     GoToInterview()
     Clear()
}
afterThat()