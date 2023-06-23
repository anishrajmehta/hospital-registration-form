function validateForm() {
  var firstName = document.forms["registrationForm"]["firstName"].value;
  var lastName = document.forms["registrationForm"]["lastName"].value;
  var age = document.forms["registrationForm"]["age"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phone = document.forms["registrationForm"]["phone"].value;

  if (firstName == "") {
    alert("Please enter your first name.");
    return false;
  }

  if (lastName == "") {
    alert("Please enter your last name.");
    return false;
  }

  if (age == "") {
    alert("Please enter your age.");
    return false;
  }

  if (isNaN(age) || age < 0) {
    alert("Please enter a valid age.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (phone == "") {
    alert("Please enter your phone number.");
    return false;
  }

  if (isNaN(phone) || phone.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Create a pop-up box stating the form was submitted successfully.
  var popUp = window.alert("Form submitted successfully!");

  // Prevent the form from submitting to the server.
  return false;
}