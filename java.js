var password = []
var usableChar = []
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
var useUpper = confirm('Would you like to use uppercase in your password?')
var useLower = confirm('Would you like to use lowercase in your password?')
var useSpecial = confirm('Would you like to use speucial in your password?')
var useNum = confirm('Would you like to use numbers in your password?')
var prompt = prompt('Please select desired the length of your password, number 8-128')




function addToUsable(confirm, arr) {

    if (confirm) {
        for (i = 0; i < arr.length; i++) {
            usableChar.push(arr[i])
        }

    }
}

addToUsable(useUpper, upperCase)
addToUsable(useLower, lowerCase)
addToUsable(useSpecial, specialChar)
addToUsable(useNum,num)

for( i = 0; i < prompt; i++){
    password.push(usableChar[Math.floor(Math.random() * usableChar.length)])
}


alert(password)






console.log(usableChar)




