/**
 * Given Integer X, return true if x is a palindrome, and false otherwise. 
 * 
 * 1. MOW: Write a function that accepts a number and returns a boolean. 
 * Return true if the number is read the same forwards and backwards or false otherwise. 
 * 2. input: number 
 * 3. output: boolean 
 * 4. The output can be determined from the input 
 * 5. data labels --> variable str that converts the number to a string, variable result that contains either true or false, 
 * two pointers to keep track of the numbers on each side of the midpoint of the number
 * 
 * Examples: 
 *  121 - true 
 * -121 - false 
 * 10 - false 
 * 
 * Break It Down 
 * 
 * Simplify/Solve
 * 
 */

function isPalindrome(x){
    let str = String(x); 
    let mid = Math.floor(str.length / 2); 
    let p1, p2; 
    if(str.length % 2 ===0) p2 = mid; 
    else p2 = mid + 1; 
    p1 = mid-1; 
    
    while(p1 > -1 && p2 < str.length){
        if(str[p1] !== str[p2])return false; 
        p1--;
        p2++;
    }
    return true; 
}

// Solution for isPalindrome without converting the integer to a string

function isPalindromeNoString(num){
    if(num < 0) return false;
    let count = 0; 
    let copyNum = num; 
    while(copyNum >= 10){
      copyNum = copyNum / 10;
      count++ 
    }
    let p1 = 0, p2 = count; 
    let start, end; 
    while(p2 > p1){
      start = Math.floor(num / (Math.pow(10, p1)) % 10)
      end = Math.floor(num / (Math.pow(10, p2)) % 10)
      if(start != end) return false; 
      p1++;  
      p2--; 
    }
    return true 
  }


