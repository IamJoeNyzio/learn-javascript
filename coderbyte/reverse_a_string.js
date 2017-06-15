// Reverse a String
// Documentation https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
// Coderbyte | https://coderbyte.com/editor/First%20Reverse:JavaScript

function FirstReverse(str) { 
    // Step 1. Create an empty string that will host the new created string
    var newString = '';
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }


  // code goes here  
  return newString; 
         
}
   
// keep this function call here 
FirstReverse(readline());                            
