/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/
var items = ['Chicken','cheese','Extra Mayo','Cucumbar','Tomato'];

function sandwich(arr){
    console.log('Your sandwich will have two pieces of bread with layers of :');
    for(var i = 0 ; i< arr.length -1; i++){
        console.log(arr[i]);
    }
    console.log(`\nand at top of all a layer of \n${arr[arr.length-1]}`) ;  
}

sandwich(items);