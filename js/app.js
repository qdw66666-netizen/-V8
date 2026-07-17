function addCustomer(data){

naonaoDB.customers.push(data);

saveDB();

}



function addProject(data){

naonaoDB.projects.push(data);

saveDB();

}



function deleteProject(index){

naonaoDB.projects.splice(index,1);

saveDB();

}



function addFinance(amount){

naonaoDB.finance.income += Number(amount);

saveDB();

}



function getTotal(type){

return naonaoDB[type].length;

}
