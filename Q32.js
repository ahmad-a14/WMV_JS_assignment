/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

let current_users =['admin','Ahmad','Ali','Taimoor','Dawood','Kashif'];
var new_user =['Imran','Babar','Ali','Rizwan','Ahmad'];

const Llist = current_users.map(current_users => current_users.toLowerCase());

console.log(Llist);
console.log(current_users);

for(var i=0; i< new_user.length; i++){
    if(Llist.includes (new_user[i].toLowerCase())){
        console.log(`Sorry, '${new_user[i]}' has already been used`);
    }else{
        console.log(`Username '${new_user[i]}' is available you can take it`);
    }
}
