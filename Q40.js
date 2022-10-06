/*
Ahmad Ali
Discord : ali_a007#8166
Js Assignmet
Date : 10/6/22
*/
function make_album(aname,title , tracks = 0){
 var album ={
    'name': aname,
    'title' : title,
 }
 if(tracks){
    album['tracks'] = tracks;
 }

 return album;
}

console.log(make_album('Bilal Saeed','Barri',1));