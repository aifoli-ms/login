// An array of javascript objects matching the simulation
const mockUsers = [
    { email: "nigel.nortey@ashesi.edu.gh", password: "lebron123", name: "Nigel Nortey", role: "Lecturer" },
    { email: "awo@ashesi.edu.gh", password: "james123", name: "Awo Apreku", role: "Faculty Intern" },
    { email: "divine@ashesi.edu.gh", password: "static123", name: "Divine Kwawukume", role: "Student" },
    { email: "shaun@ashesi.edu.gh", password: "Him7890", name: "Shaun Mensah", role: "Student" },
];

//function for the login
function validateForm() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  


  let foundUser = null; // since it is an object initializing to null
  // loop  throughb the array
  for(let i = 0; i < mockUsers.length; i++){
    const user = mockUsers[i];
    // checks is the user email and password input is euqal to the one object in the array
    if(user.email === email && user.password === password){
      foundUser = user;
      break;
    }
  }

    //if found send an alert of successful
  if(foundUser){
    alert(`Successful Login! Welcome ${foundUser.name} (${foundUser.role})`);
    return true;
  }
  else{
    alert("Login Failed: Invalid email or password");
    return false;
  }
}

function validateRegistration() {
  let email = document.forms["registerForm"]["email"].value;
  let password = document.forms["registerForm"]["password"].value;
  // ensure email fiield is filled
  if (email === "") {
    alert("Email must be filled out");
    return false;
  }
// ensure password field is filled
  if (password === "") {
    alert("Password must be filled out");
    return false;
  }

    // password must not be less than 6 characters
  if(password.length < 6){
    alert("Password must be at least 6 characters long");
    return false;
  } else {
    alert("Successful Registration");
   window.location.href = "login.html";// from registration rerout to login
  return false; 
}
}

