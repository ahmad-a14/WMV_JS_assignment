/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/
var magicians =['Messi','Shin Lim','Harry Potter','Snape','Voldermot'];

function make_great(arr){
   var arr2 = arr.splice();
    for(var i=0; i<arr.length; i++ ){
        arr2[i] = "Great " + arr[i];
    }
    return arr2;
}


function show_magician(arr){
    for(var i=0 ; i< arr.length; i++){
        console.log(arr[i]);
    }
}


arr2 = make_great(magicians);
show_magician(magicians);
show_magician(arr2);