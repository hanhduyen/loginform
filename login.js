var loginApi = 'https://api.storerestapi.com/auth/login'
var registerx  ='https://api.storerestapi.com/auth/register'
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  if (username.value ===''|| email.value ===''|| password.value ==='')
  alert("chua dien thong tin");
  else{
  alert("dang ky thanh cong");
}}

function login(){
fetch(loginApi, {
    method: "POST",
    body: JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.status == 200) {
        localStorage.access_token = res.data.access_token;
        alert("Đăng nhập thành công");
        console.log(res);
      }
      else
        alert("Đăng nhập thất bại");
    })
    .catch((err) => {
      alert("Đăng nhập thất bại");
      console.log(err);
    })
    .finally(() => {
      render();
    })};

function validateForm() {
  let x = document.forms["login-form"]["name"].value;
  if (x == "") {
  alert("Name must be filled out");
  return false;
}}

function checkLogin(email, password) {
  var users = JSON.parse(localStorage.users);
  var loginSuccess = false;
  for (var user of users) {
    if (user.email == email && user.password == password) {
      loginSuccess = true;
    }
  }

  return loginSuccess;
}