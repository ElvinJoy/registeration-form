validate = () => {
  let errorMessage = "";

  if (document.getElementById("name").value == "") {
    errorMessage = errorMessage + "Please enter your name.<br>";
  } 
  if (document.getElementById("last_name").value == "") {
    errorMessage = errorMessage +  "Please enter your last name.<br>";
  } 
  if (document.getElementById("address").value == "") {
    errorMessage = errorMessage + "Please enter your address.<br>";
  }
  /*if (document.getElementById("age").value == "") {
    errorMessage = errorMessage + "Please enter your age.<br>";
  }*/
  if (document.getElementById("mail").value == "") {
    errorMessage = errorMessage + "Please enter your email id.<br>";
  }
  if (document.getElementById("password").value == "") {
    errorMessage = errorMessage + "Please enter your phone password.<br>";
  }
  if (document.getElementById("number").value == "") {
    errorMessage = errorMessage + "Please enter your number.<br>";
  }
  if (document.getElementById("photo").value == "") {
    errorMessage = errorMessage + "Please select a photo.<br>";
  }
  else
  {
    document.getElementById("form").submit();
  }

  document.getElementById("error").innerHTML = errorMessage;
};