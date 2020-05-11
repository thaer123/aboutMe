'use strict'

function login(){
    var loginfo=confirm('do you have account'); 
    if (loginfo) {
        var welcomeOrNot='welcome to your faverate ';
    } 
    else{
        welcomeOrNot='please signUp ';
    }
    return welcomeOrNot;
}
//document.write(login);

function helloThere(){
    var name=prompt('whats your name:');
    

    while (name!==null && name!==Number ) {

       name=prompt('please enter your age');
        
    }
    var numberOf=prompt('haw mutch time you spend sleeping ');
    console.log(numberOfO);
    
    for (var i = 0; i< numberOf; i++) {
       
    if (name==='shihab') {
        photo=photo+'<img src="https://migrationology.com/wp-content/uploads/2016/04/mansaf-jordanian-food.jpg">';

        
    } else if (name==='razan') {
         photo=photo+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNCBvzqVUTtPRnqtRh5agxHcraTtXHJlOxA8eypYP8HUSPDNTo&usqp=CAU">';

    } else if (name==='thaer') {

        photo=photo+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDRyrq8TdpdG7nW_1ddNaOlxRBZaKhTrHdCqjCc2zlkmI1fHHj&usqp=CAU">';
   } 
   //else {
    //    photo='please chose mansaf or shawerma or falafel ';
}   

   
    

    return photo;
    
    //document.write(foodOrder());
}