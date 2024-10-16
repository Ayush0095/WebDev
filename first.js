/*console.log("JAI SHREE RAM.")
let age = prompt("Enter your age.")

if(age<18){
    console.log("You will recieve the discount of 30%.")
}else if(age<29){
    console.log("You will recieve the discount of 15%.")
}else{
    console.log("You will recieve the discount of /*5%.")
}*/
/*const code = "No-Ball"
let secert = prompt("Enter the secert code for the entery.....")
while(secert!=code){
    let secert = prompt("Enter the secert code for the entery.....")
}*/

/*

//Guessing game

let maximum = parseInt(prompt("Enter your Number."))
//There must be a scenaerio where someone must be entering a string
while(!maximum){
    maximum = parseInt(prompt("Enter a valid Number!!!!!"))
}

let targetNum = Math.floor(Math.random()*maximum)+1
let count = 1
let guess = parseInt(prompt("....Enter your Guess Baby...."))
while(guess!==targetNum){
    
     if(guess>targetNum){
        guess=parseInt(prompt("You Guessed too high !!!!"))
        count++;
     }else if (guess<targetNum){
        guess= parseInt(prompt("You guessed a too low !!!!!"))
        count++;
     }else{
        guess=prompt("Invalid input.quit the game")
     }
}
if(guess==='q'){
    console.log("QUIT")
    
}
console.log (`You took ${count} chances too guess the Number`)
if(count>5){
         console.log("This means you are PUSSSY !!!!")
}else{
    console.log("This means you are a MARD !!!!")
}
*/

//for... of loop

let arr =['aa','bb','cc']
for(let vari of arr){
    console.log(`contents are ${vari}`)
}
