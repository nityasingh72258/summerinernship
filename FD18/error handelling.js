function starting(callback){
    setTimeout(()=>{
    console.log("add milk and watter and put on stove");callback()},2000)
}
function sugerTea(callback){
    setTimeout(()=>{
        console.log("adding suger and tea in the milk");
        const error=new Error ("dukaan band h")
        callback(error)},1000)
}
function serve(callback){
    console.log("serve tea with biscuit");callback()
}
function call(){
    starting(()=>{           //
        sugerTea((error)=>{ 
            if(error){
                console.log(error);
            }                          // this is called callback hell
            serve(()=>{         
                console.log("task is completed");
                
            })
        })
    })
}
call()
