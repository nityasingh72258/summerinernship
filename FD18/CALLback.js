//A callback function is a function passed as an argument into another function.

//A callback function is intended to be executed later.

//Later is typically when a specific event occurs or an asynchronous operation completes.

//The name "callback" stems from the idea that the outer function will "call you back" later when it has finished its task

function starting(callback){
    setTimeout(()=>{
    console.log("add milk and watter and put on stove");callback()},2000)
}
function sugerTea(callback){
    setTimeout(()=>{
        console.log("adding suger and tea in the milk");callback()},1000)
}
function serve(callback){
    console.log("serve tea with biscuit");callback()
}
function call(){
    starting(()=>{           //
        sugerTea(()=>{       // this is called callback hell
            serve(()=>{         
                console.log("task is completed");
                
            })
        })
    })
}
call()
