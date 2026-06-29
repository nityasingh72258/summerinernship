//===synchronous(one by one program execute) using function=====
//======making tea=======
function starting(){
    console.log("add milk and watter and put on stove");
}
function sugerTea(){
    console.log("adding suger and tea in the milk");
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