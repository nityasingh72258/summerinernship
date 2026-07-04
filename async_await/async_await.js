//promise :JavaScript Promises were created to make asynchronous JavaScript easier to use.

//A Promise object represents the completion or failure of an asynchronous operation.

//A Promise can be in one of three exclusive states:

function starting(){
    console.log("add milk and watter and put on stove");
}
function sugerTea(){
    const prms = new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("adding suger and tea in the milk");reject(":error are here")
    },2000)
    })
    return prms
}
function serve(){
    console.log("serve tea with biscuit");
}
async function call(){
    try{
        await starting()

    }catch (error){
    console.log("error",error);
    }
    try{
        await sugerTea()
    }catch(error){
        console.log("error",error);
    }
    try {
        await serve()
    } catch (error) {
        console.log("error",error);
    }
    
    
}
call()