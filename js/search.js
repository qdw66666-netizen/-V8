function searchCustomer(keyword){

return naonaoDB.customers.filter(item=>{

return item.name.includes(keyword);

});


}


function searchProject(keyword){

return naonaoDB.projects.filter(item=>{


return item.name.includes(keyword);


});


}
