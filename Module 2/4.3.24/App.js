//COMPARISON OPERATORS   ----> TRUE  , FALSE

// 1) == 
            // 5 == 5    ---> TRUE
            // 9 == 5    ---> false  
            // "Ahmed" == "Hashir"  
            // 5 == "5"   
            // ye sirf value compare kary ga 
            // document.write( 5 == "5")
            

// 2) ===      
// document.write(  5 === "5"    ) 

// 3) >    greater than 
            // 7 > 5   ---> true
            // document.write(7 > 7 )

// 4) >=  greater than or equals to
// document.write(7 >= "7" )

// 5) <  less than
        // 5 < 7 --> true
        // 33 < 12  --> false
        // document.write(33 < 12)

// 6 <= less than or equals to
        // 7 <= 7   -- true
        // document.write(7 <= 7)

//7)  !=  
        // 7 != 7  
        // document.write( 7 != 7)
        // document.write( 8 != 7)





// ##########  CONDITIONS ############

// var number  = 22 ;

// if( number > 0 ){
//     document.write("The number is Positive...")
// }
// else{
//     document.write("The number is Negative...")
// }


// var age = +prompt("Enter age: ") ; 

// if(age === 18){
//     alert("You can vote ..")
// }
// else{
//     document.write("You can't vote ..")
// }




// var username = "adminsdfsdf"
// var password = "admin123";

// if(username === "admin"){

//     if(password == "admin123"){
//         document.write("Successfully loged in ...")
//     }
//     else{
        
//         document.write("pass is not correct")
//     }
    
    
// }
// else{
//     document.write("Username is not correct... ")
// }




// var number  = 0 ;

// if(number > 0){
//     document.write("The number is positive ...")
// }

// else if(number < 0){
//     document.write("The number is negative ...")
// }

// else{
//     document.write("The number is 0 ...")
// }


// var number = 25;

// if(number > 20){
//     document.write("The number is greater than 20")
// }
// else if( number > 15){
//     document.write("The number is greater than 15")
    
// }
// else{
//     document.write("The number is something else")
// }


var studentName = prompt("Enter your name")
var english = +prompt("Enter english marks")
var urdu = +prompt("Enter urdu marks")
var maths = +prompt("Enter maths marks")
var fsx = +prompt("Enter fsx marks")
var computer = +prompt("Enter computer marks")
var total = english + urdu + maths + fsx + computer
var perc = (total / 500) * 100
var grade;

if(perc >= 80){
    grade = "A+"
}
else if(perc >= 70){
    grade = "A"
}

else if(perc >= 60){
    grade = "B"
}

else if(perc >= 50){
    grade = "C"
}

else if(perc >= 40){
    grade = "D"
}
else{
    grade = "F"
}

document.write(
    `<table border='1px'>
    <tr>
    <th>STUDENTS NAME</th>
    <th>ENGLISH</th>
    <th>URDU</th>
    <th>MATHS</th>
    <th>FSX</th>
    <th>COMPUTER</th>
    <th>TOTAL</th>
    <th>PERCENTAGE</th>
    <th>GRADE</th>
    </tr>

    <tr>
    <td>${studentName}</td>
    <td>${english}</td>
    <td>${urdu}</td>
    <td>${maths}</td>
    <td>${fsx}</td>
    <td>${computer}</td>
    <td>${total}</td>
    <td>${perc.toFixed(2)}%</td>
    <td>${grade}</td>
    </tr>


    </table>`
)







// if(perc >= 80){
//     document.write("A+")
// }
// else if(perc >= 70){
//     document.write("A")
// }

// else if(perc >= 60){
//     document.write("B")
// }

// else if(perc >= 50){
//     document.write("C")
// }

// else if(perc >= 40){
//     document.write("D")
// }
// else{
//     document.write("nikammey")
// }

