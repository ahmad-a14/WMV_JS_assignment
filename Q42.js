/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/
var magicians =['Messi','Shin Lim','Harry Potter','Snape','Voldermot'];

function make_great(arr){
    for(var i=0; i<arr.length; i++ ){
        arr[i] = "Great " + arr[i];
    }
}


function show_magician(arr){
    for(var i=0 ; i< arr.length; i++){
        console.log(arr[i]);
    }
}

make_great(magicians);
show_magician(magicians);