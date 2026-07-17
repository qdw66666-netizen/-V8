function saveDB(){

localStorage.setItem(

"naonaoDB",

JSON.stringify(naonaoDB)

);

}



function loadDB(){

let data =

localStorage.getItem("naonaoDB");


if(data){

naonaoDB = JSON.parse(data);

}


}



loadDB();
