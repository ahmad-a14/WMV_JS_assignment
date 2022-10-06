/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

function make_car(mnaufacturer,model,Optionals = {}){
    let car ={
        "mnaufacturer" : mnaufacturer,
        "model" : model,
    };

  //  for(var i =0 ; i< Object.keys(Optionals).length; i++ ){
  //      car[`${Optionals[i]}`] = Optionals[i]; 
   // }

        for(var i in Optionals){
            car[`${i}`] = Optionals[i]; 
        }
    return car;
}

var Civic = make_car("Honda","Civic",{
    "year" : 1991,
    "color" : "White",
    "headlights" : "flashlisghts"
});
console.log(Civic);