function getNumbers() {
  //If you make this function at this "scope level", then it can be called from anywhere else in the code.

  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parsing numbers below
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  let outNumber = 0;

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    for (let i = startValue; i <= endValue; i++) {
      outNumber = ;
    }

    document.getElementById("results").innerHTML = outNumber;
  } else {
    alert("Please Enter Numbers");
  }

  /* let a = 10;
  let b = 20;

  let a = b;

  number = b; */

  document.getElementById("results").innerHTML = outNumber;

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
