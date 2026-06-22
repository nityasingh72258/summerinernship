//===iterating over object properties====
//===with condition
let std={
    name:"nitya",
    age:19,
    add:"Sitapur",
    roll:76,
    marks_overall:87
}
for(let key in std){
    if(std[key]=="Sitapur")
        break;
console.log(key+"=>"+std[key]);
}

//====without condition====

let std={
    name:"nitya",
    age:19,
    add:"Sitapur",
    roll:76,
    marks_overall:87
}
for(let key in std){
console.log(key+"=>"+std[key]);
}