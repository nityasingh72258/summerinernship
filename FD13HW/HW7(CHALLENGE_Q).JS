let company={
    companyName:"infoseek",
    founder:"Anuj",
    establishedYear:2020,
    employees:20,
}

//=====add======
company.propertyLocation="Lucknow"


//====update the number of employee=====
company.employees=25

//=======delete the foun der property====
delete company.founder;
console.log(company);