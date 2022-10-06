/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

var Users =['admin','Ahmad','Ali','Taimoor','Dawood','Kashif'];

for(var i =0; i< Users.length ;i++){
    if(Users[i] == 'admin'){
        console.log(` Hello ${Users[i]}, would you like to see a status report? \n`)
    }else{
        console.log(` Hello ${Users[i]}, thank you for logging in again. \n`)
    }
}