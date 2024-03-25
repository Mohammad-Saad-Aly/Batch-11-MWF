// // var a= "ABCD"
// // a =a.toUpperCase();
// // a= a.toLowerCase();


// var arr = ["a" , 'b' , "c" , "a" , "b"]



// // document.write(arr.indexOf("b"))  // check first occurence
// // document.write(arr.lastIndexOf("b"))

// // for(var i = 0 ; i<arr.length ; i++){
// //     if(arr[i] == 'c'){
// //         document.write("Mil gaya at index"+i)
// //     }
// // }


// // for(var i=1 ; i<=5 ; i++){
// //     document.write(i+" ")
// // }



// var i =1;
// while(i<=5){
//     document.write(i+" ");
//     i++;
// }





// var num = [2 , 7 , 1 , 9 , 11 , 8 , 17 , 4 , 15]
// var even = []
// var odd = []
// // console.log(7%2 , ' without array');
// // console.log(num[1]%2 , 'with array')
// for(var i = 0 ; i< num.length ; i++){
//     if(num[i]%2 == 0){
//         // document.write('even' , num[i] ,"<br>")
// even.push(num[i])

//     }else{
//         // document.write('odd' , num[i],"<br>")
//         odd.push(num[i])
//     }
// }

// console.log(num);
// console.log(even);
// console.log(odd);





// var num = [50, 10 , 60 , 30 ,40 , 10] // 200
// let sum = 0
// for(var i= 0 ; i < num.length ; i++){
//     sum+=num[i]
// }

// document.write(sum);

// for(var i = 5 ; i <=50 ; i++){
//     document.write(i);
// }


// var i = 5
// document.write(i) //5
// document.write(i+=5) // 10
// document.write(i+=5) //10
// document.write(i+=5) //5
// document.write(i+=5)
// document.write(i+=5)
// document.write(i+=5)
// document.write(i+=5)
// document.write(i+=5)
// document.write(i+=5)


// jo number 2 or 3 pr

// var num = [2 , 7 , 1 , 6 , 12 , 8 , 17 , 4 , 18]


// var items = [ 'apple', 'mango' ,'orange','apple', 'apple' ,'orange']

//ans = 3
//ans = 36
//ans = 6 , 12 18





// for(var i = 1 ; i<= 10 ; i++){
//     document.write(i*2)
// }
// document.write('<br>')
// for(var i = 1 ; i<= 10 ; i++){
//     document.write(i*3)
// }
// document.write('<br>')
// for(var i = 1 ; i<= 10 ; i++){
//     document.write(i*4)
// }
// document.write('<br>')
// for(var i = 1 ; i<= 10 ; i++){
//     document.write(i*5)
// }
// document.write('<br>')



// document.write(2 x 1 = 2)
// document.write(2 x 2 = 4)

// for (var i = 2 ; i <=5 ; i++){
//     // document.write(i)
//     for(var j = 1 ; j <=10 ; j++){
//         // document.write(i , "X"       ,     j , " =" ,i*j)
//         document.write(`${i} x ${j} = ${i*j}`)
//         document.write("<br>")
//     }
//     document.write("<br>")
// }


// let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// // get the index of the first occurrence of "JavaScript"
// let index = languages.indexOf("Css" );
// console.log(index);


// for(var i = 0;  i <= 5 ; i++){
//     // document.write(`* <br>`)
//     for(var j = 0 ; j< 10; j++){
//         document.write(`* `)
//     }
//     document.write("<br>")
// }

for (var i = 1 ; i <= 5 ; i ++ ){
    document.write("<center>")
    for(var j = 1 ; j< i; j++){
        document.write(`* ` )
    }
    document.write("</center>")
    document.write("<br>")
}