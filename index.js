
//create an array of all images
var yourImages_1 =["images/dice1.png", "images/dice2.png",
"images/dice3.png", "images/dice4.png", "images/dice5.png",
"images/dice6.png"]

//generate random numbers for the images to be selected by index
var randomNumber_1 = Math.floor(Math.random() * yourImages_1.length)
var theImage_1 = yourImages_1[randomNumber_1]

//manipulate the dom with your random number using setAttribute method
var image_1 = document.querySelectorAll("img")[0].setAttribute("src", theImage_1)

/*repeat the same procedure for the second image
 to make sure the randomness is disimilar in both images*/

var yourImages_2 =["images/dice1.png", "images/dice2.png",
"images/dice3.png", "images/dice4.png", "images/dice5.png",
"images/dice6.png"]

var randomNumber_2 = Math.floor(Math.random() * yourImages_2.length)
var theImage_2 = yourImages_1[randomNumber_2]
var image_2 = document.querySelectorAll("img")[1].setAttribute("src", theImage_2)


//set conditions for choosing winner

if (randomNumber_1 > randomNumber_2){
  document.querySelector("h1").innerHTML="🎇Player 1 Wins!"
}
else if(randomNumber_1 < randomNumber_2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🎇"
}
else{

document.querySelector("h1").innerHTML="Draw!!!"

}
