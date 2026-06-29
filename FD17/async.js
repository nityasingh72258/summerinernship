//
function starting(){
    console.log("add milk and watter and put on stove");
}
function sugerTea(){
    setTimeout(()=>{
        console.log("adding suger and tea in the milk");},10000)
}
function serve(){
    console.log("serve tea with biscuit");
}
function call(){
    starting()
    sugerTea()
    serve()
}
call()