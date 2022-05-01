var localStorage = window.localStorage;
var c = 0;

function addNewUser() {
  const name = document.forms["rform"]["name"].value;
  const email = document.forms["rform"]["emailid"].value;
  const mobile = document.forms["rform"]["mobile"].value;
  const date = new Date();
  const m = date.getMonth() + 1;

  if (name == "" || email == "" || mobile == "") {
    alert("All fields are compulsory to fill");
    return;
  }
  const newuser = { name, email, mobile};

  localStorage.setItem(localStorage.length, JSON.stringify(newuser));

  window.location.href = "index.html";
  console.log(newuser);
}

function showUser() {
    c = 0;
  
    while (localStorage.getItem(c)) {
      console.log(localStorage.getItem(c));  
      c += 1;
    }
  }