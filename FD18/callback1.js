function prepare(callback){
    setTimeout(()=>{
    console.log("preparing the exam");callback()},2000)
}
function achivingExam(callback){
    setTimeout(()=>{
    console.log("after achiving the exam");callback()},1000)
}
function GoToInterview(callback){
    console.log("after inertview achiving");callback()
}
function Clear(callback){
    console.log("clear IAS preparation");callback()
}
function afterThat(){
     prepare(()=>{
        achivingExam(()=>{
            GoToInterview(()=>{
                 Clear(()=>{
                    console.log("completed preparetion");
                 })
            })
        })
     })
}
afterThat()