function signup(e) {
    event.preventDefault();
    var formValues = document.forms["signup-form"];
    var username = formValues["username"].value;
    var email = formValues["email"].value;
    var password = formValues["password"].value;
    var requestData = {
        name: username,
        email,
        password,
    }
    var isValid = validateForm(username, email, password);
    if (isValid) {
        const url = 'https://api.storerestapi.com/auth/register';
        fetch(url, {
            method: "POST",
            body: JSON.stringify(requestData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((res) => {
              if (res.status == 201) {
                alert("Đăng ký thành công");
                // var currentUsers = [];
                // currentUsers.push({username, email, password});
                // localStorage.users = JSON.stringify(currentUsers);
                window.location.replace("/login.html");
              }
              if (res.status >= 400 && res.status < 500) {
                alert(res.message);
              }
            })
    }
}

function validateForm(username, email, password) {
    if (username.value ==='' || email.value ==='' || password.value ==='') {
        alert("chua dien thong tin");
        return false;
    } else {
        return true;
    }
}
