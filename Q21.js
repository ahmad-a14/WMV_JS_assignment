/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/

class Player{
    constructor(finame,lname,age,rating) {
    
          this.firstName = finame;
           this.lastName = lname;
            this.Age = age;
           this.Rating = rating; 
    }

    display(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.Age);
        console.log(this.Rating);
    }
}

var Plist = [];
var finame;
var Laname;
var aage;
var rate

while(1){
    finame = prompt('enter Fisrt Name of players');
    if(finame == 'end'){
        break;
    }
    Laname = prompt('enter last Name of players');
    aage = prompt('enter age Name of players');
    rate = prompt('enter Fifa rating Name of players');

    let object = new Player('finame','Laname',aage,rate);
    Plist.push(object);

}

console.log(Plist);
//let a = new Player('Leo','Messi',34,91);
//a.display();

