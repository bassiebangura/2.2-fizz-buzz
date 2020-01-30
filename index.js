for (let num = 1; num < 101; num++) {
    let $3quotient = num % 3 == 0;
    let $5quotient = num % 5 == 0
    if ($3quotient &&$5quotient) console.log("FizzBuzz")
    else if($3quotient) console.log("Fizz")
    else if($5quotient) console.log("Buzz")
    else console.log(num);
}
  

    
