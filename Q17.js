/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

var guestList = ['Lionel Messi','Neymar Jr.','Luis Suarez'];
for(var i =0; i< guestList.length; i++){
    console.log(`Mr. ${guestList[i]}, your are invited to Dinner at PIAIC`);   
}
console.log('\n');


console.log(`Sorry to inform that Mr. ${guestList[2]} is not available for the Dinner, So according to the new list: \n`   );
guestList[2]='Kiliyan Mbappe';
for(var i1 =0; i1< guestList.length; i1++){
    console.log(`Mr. ${guestList[i1]}, your are invited to Dinner at PIAIC`);   
}
console.log('\n');

console.log(`A good new for our guests we have found a bigger table so you can expect some more gusets \n`);
guestList.unshift('Cristiano Ronaldo');
guestList.splice((guestList.length/2),0,'Haji Banzema');
guestList.push('Bale');
for(var i1 =0; i1< guestList.length; i1++){
    console.log(`Mr. ${guestList[i1]}, your are invited to Dinner at PIAIC`);   
}
console.log('\n');

//Q17
console.log(`We are sorry to inform that there is a slight change in plan. We can only arrange a table for 2 guests only.So : \n`);


for(var i= guestList.length-1 ; i>1 ; i--){
    
    console.log(`Mr. `+ guestList[i] + ` we are really sorry we can not invite you to the dinner`);
    guestList.pop();

}
console.log('\n');

 
for(var i1 =0; i1< guestList.length; i1++){
    console.log(`Mr. ${guestList[i1]}, your are invited to Dinner at PUCIT`);   
}
console.log('\n');
var numberOfGuests = guestList.length;
for(var i= guestList.length ; i>=0 ; i--){
    guestList.pop();
}

console.log(guestList);