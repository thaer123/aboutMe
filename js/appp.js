 'use strict'
 
    var name=prompt("please enter your first name");
    console.log(name);
    var sName=prompt("please enter your dad name");
    console.log(sName);
    var age=prompt("is your age betweet 20 -30 ? please answer with yes/no");
    console.log(age);
    var university=prompt("is your universty in jordan ?  please answer with yes/no");
    console.log(university);
    var major=prompt("is your major in technology field? please answer with yes/no");
    console.log(major);
    alert(" hi "+ name + "  " + sName +" your age between 20-30 " + age + " you have graduated from jordanian university " 
    + university + "  with B.D in technology "+ major );

function out(params) {
    

    if (age==='yes'&& university==='yes'&& major==='yes') {
       var b= document.writeln(' hello '+ name.toUpperCase() +' i wish you happy life ');
       var right=alert("you are right Mr "+name.toUpperCase());
      
    } else {
       var b= document.write("hello"+name+" "+sName+"hi");
        
    }
    return b.toUpperCase();
}
// function login(){
//     var loginfo=confirm('do you have account'); 
//     if (loginfo) {
//         var welcomeOrNot='welcome to your faverate ';
//     } 
//     else{
//         welcomeOrNot='please signUp ';
//     }
//     return welcomeOrNot;
// }


// function helloThere(){
//     var name=prompt('whats your name:');
    

//     while (name!==null && name!==Number ) {

//        name=prompt('please enter your age');
        
//     }
//     var numberOf=prompt('haw mutch time you spend sleeping ');
//     console.log(numberOfO);
    
//     for (var i = 0; i< numberOf; i++) {
       
//     if (name==='shihab') {
//         photo=photo+'<img src="https://migrationology.com/wp-content/uploads/2016/04/mansaf-jordanian-food.jpg">';

        
//     } else if (name==='razan') {
//          photo=photo+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNCBvzqVUTtPRnqtRh5agxHcraTtXHJlOxA8eypYP8HUSPDNTo&usqp=CAU">';

//     } else if (name==='thaer') {

//         photo=photo+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDRyrq8TdpdG7nW_1ddNaOlxRBZaKhTrHdCqjCc2zlkmI1fHHj&usqp=CAU">';
//    } 
 
// }   

   
    

//     return photo;
    
   
// }