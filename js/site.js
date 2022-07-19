function getNumbers() {
  //If you make this function at this "scope level", then it can be called from anywhere else in the code.

  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parsing numbers below
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    let numbers = generateNumbers(startValue, endValue);
    displayValues(numbers);

    document.getElementById("results").innerHTML = outNumber;
  } else {
    alert("Please Enter Numbers");
  }
  //business logic below:
  function generateNumbers(start, stop) {
    let numbers = [];

    for (let i = start; i <= stop; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  //display the list of numbers
  //View function
  //Embolden the even numbers
  //Do something else with the odd numbers
  function displayValues(numArray) {
    let results = document.getElementById("results");
    results.innerHTML = "";
    //my template
    //<div class="col">1</div>
    for (let i = 0; i < numArray.length; i++) {
      //we need to get our results area

      //create div tag
      let div = document.createElement("div");
      //get the value in the array at hte current index
      div.innerHTML = numArray[i];
      //add class
      div.classList.add("col");
      //if number is odd, add the odd class.
      if (numArray[i] % 2 == 0) {
        div.classList.add("odd");
      } else {
        div.classList.add("even");
      }
      //if number is even, add the even class.

      //insert the value
      results.appendChild(div);
      //append to the page
    }
  }

  /* let a = 10;
  let b = 20;

  let a = b;

  number = b; */

  //document.getElementById("results").innerHTML = outNumber;

  //Equivalences in JavaScript ALWAYS go right nested into left.
  //So,
}

/* function getValue2() {
  let msg = "";

  msg = document.getElementById("numbers").value;

  Swal.fire({
    backdrop: false,
    title: "Hundo",
    text: msg,
  });
} */
/* JavaScript allows websites to have "dynamic" content, which means content that runs AT runtime. JavaScript is used to take elements on a page, change their values, change things, create new things, delete things, all without re-loading the entire page. It also has logical operators that allows JavaScript to only do actions when certain conditions are met.

There are certain things that CAN'T happen without JavaScript. Creating things like a function that counts all the way up to 1000 is only possible with JavaScript, because it can be somewhat automated based on logic. If you were to do it in HTML, you would have to hard-code every single line

With JavaScript, you CANNOT use passwords. With HTML and CSS, the code is all processed at the server, which is safe. With JavaScript, the code is all run IN THE COMPUTER, which is not secure. With JavaScript, all of the code is stored locally on the device.
 */

//WHen Bobby refers to the "DOM",
