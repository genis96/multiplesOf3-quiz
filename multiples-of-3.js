/*Multiples of Three
The code below counts the multiples of 3 between 1-100.

Rewrite the code to use a for loop instead of a while loop.
*/

//GIVEN:
function myFunction(input) {

    // Rewrite the code below to use a `for` loop instead of a `while` loop.
  
    var multiplesOfThreeCount = 0;
  
    // loop through numbers 1-100, count multiples of 3
    var number = 1;
    while (number <= 100) {
      if (number % 3 === 0) {
        multiplesOfThreeCount++;
      }
      number++;
    }
  
    console.log('There are ' + multiplesOfThreeCount + ' multiples of 3 between 1 and 100.')
  
    /* NOTE: For this challenge to pass all tests, you will have to replace
    the entire `while` loop. Commenting out the `while` loop will not work. */
  
    return multiplesOfThreeCount;
  }

  //CHANGE TO FOR LOOP BELOW - ANSWER


//Correct Passing Code
function myFunction(input) {

    // Rewrite the code below to use a `for` loop instead of a `while` loop.
  
    var multiplesOfThreeCount = 0;
  
    // loop through numbers 1-100, count multiples of 3
    var number = 1;
    for (var i = 0; i <= 100; i++) {
      if (number % 3 === 0) {
        multiplesOfThreeCount++;
      }
      number++;
    }
  
    console.log('There are ' + multiplesOfThreeCount + ' multiples of 3 between 1 and 100.')
    return multiplesOfThreeCount;
  }