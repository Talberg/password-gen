var password = []
var usableChar = []
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
var textArea = document.getElementById('password')
var ranPassword = false
var button1El= document.querySelectorAll('#generate')
var footerEl = document.querySelector('.card-footer')


footerEl.setAttribute('style','background-color:white')
console.log(button1El)

// button1El.setAttribute('style', 'border-radius: 5px; background-color:red;)

button1El[0].setAttribute('style', 'border-radius:20px; background-color:firebrick; color:white;  ')
button1El[1].setAttribute('style', 'border-radius:20px; background-color:lightgray; color:white;  ')
textArea.setAttribute('style','border:dashed; border-color:gray; text-align:center; margin-left:20% ;margin-right:20%')
// var useUpper = confirm('Would you like to use uppercase in your password?')
// var useLower = confirm('Would you like to use lowercase in your password?')
// var useSpecial = confirm('Would you like to use speucial in your password?')
// var useNum = confirm('Would you like to use numbers in your password?')
// var prompt = prompt('Please select desired the length of your password, number 8-128')


// function generatePass(){
//  var useUpper = confirm('Would you like to use uppercase in your password?')
// var useLower = confirm('Would you like to use lowercase in your password?')
// var useSpecial = confirm('Would you like to use special in your password?')
// var useNum = confirm('Would you like to use numbers in your password?')
// var prompt = prompt('Please select desired the length of your password, number 8-128')
// addToUsable(useUpper, upperCase)
// addToUsable(useLower, lowerCase)
// addToUsable(useSpecial, specialChar)
// addToUsable(useNum,num)
// alert(password.join(""))
// }


function copyButton(){
    var copyText = textArea;
    copyText.select();
    document.execCommand('copy');
    copyText.setSelectionRange(0, 99999)
    alert(copyText)
}







// pushes the arrays if the user confirms the question using the T/F 






function addToUsable(confirm, arr) {

    if (confirm) {
        for (i = 0; i < arr.length; i++) {
            usableChar.push(arr[i])
        }

    }
}

// addToUsable(useUpper, upperCase)
// addToUsable(useLower, lowerCase)
// addToUsable(useSpecial, specialChar)
// addToUsable(useNum,num)




console.log(Array.toString(password))

textArea.textContent = usableChar



function randomize (){
 var numChar = prompt('Please select desired the length of your password, number 8-128')



  for( i = 0; i < numChar; i++){
    password.push(usableChar[Math.floor(Math.random() * usableChar.length)])

   
}

ranPassword = true


if(ranPassword){

    textArea.textContent = (password.join(''))
}



   }


function generatePass(){
    
   var useUpper = confirm('Would you like to use uppercase in your password?')
   var useLower = confirm('Would you like to use lowercase in your password?')
   var useSpecial = confirm('Would you like to use special in your password?')
   var useNum = confirm('Would you like to use numbers in your password?')
 
    addToUsable(useUpper, upperCase)
    addToUsable(useLower, lowerCase)
    addToUsable(useSpecial, specialChar)
    addToUsable(useNum,num)
 
 
 
   if(useLower === false && useSpecial === false && useSpecial === false && useNum === false ){
       alert('Please choose at least 1.')
       generatePass()
   }

   
  

   console.log(password)
    
   randomize()

   }
   
   

   function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }