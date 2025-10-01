const mockUsers = [
    { email: "nigel.nortey@ashesi.edu.gh", password: "lebron123", name: "Nigel Nortey", role: "Lecturer" },
    { email: "awo@ashesi.edu.gh", password: "james123", name: "Awo Apreku", role: "Faculty Intern" },
    { email: "divine@ashesi.edu.gh", password: "static123", name: "Divine Kwawukume", role: "Student" },
    { email: "shaun@ashesi.edu.gh", password: "Him7890", name: "Shaun Mensah", role: "Student" },
];


function validateForm() {
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  


  let foundUser = null;
  for(let i = 0; i < mockUsers.length; i++){
    const user = mockUsers[i];

    if(user.email === email && user.password === password){
      foundUser = user;
      break;
    }
  }

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

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (password === "") {
    alert("Password must be filled out");
    return false;
  }

  if(password.length < 6){
    alert("Password must be at least 6 characters long");
    return false;
  } else {
    alert("Successful Registration");
   window.location.href = "login.html";
  return false; 
}
}

