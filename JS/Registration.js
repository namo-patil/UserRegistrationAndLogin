class UserData {

    get userName() {
        return this._userName;
      }
    
    set userName(name) {
        this._userName = name;     
    }
    
    get userEmail() {
        return this._userEmail;
    }

    set userEmail(email) {
        this._userEmail = email;
    }

    get userPassword() {
        return this._userPassword;
    }

    set userPassword(password) {
        this._userPassword = password;
    }

    get userConfirmPassword() {
        return this._userConfirmPassword;
    }

    set userConfirmPassword(confirmPassword) {
        this._userConfirmPassword = confirmPassword;
    }

    toString() {
        return "name=" + this._userName + ", email=" + this._userEmail + ", password=" + 
                        this._userPassword + ", confirmPassword=" + this._userConfirmPassword;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "Name Required";
            return;
        }
        try {
            (new UserData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    
    const password = document.querySelector('#password');
    const passwordError = document.querySelector('.password-error');
    password.addEventListener('input', function () {
        if (password.value.length == 0) {
            passwordError.passwordContent = "";
            return;
        }
        try {
            (new UserData()).password = password.value;
            passwordError.passwordContent = "";
        } catch (e) {
            passwordError.passwordContent = e;
        }
    });

    const confirmPassword = document.querySelector('#confirmPassword');
    const confirmPasswordError = document.querySelector('.confirmPassword-error');
    confirmPassword.addEventListener('input', function () {
        if (confirmPassword.value.length == 0) {
            confirmPasswordError.confirmPasswordContent = "";
            return;
        }
        try {
            (new UserData()).confirmPassword = confirmPassword.value;
            confirmPassword.confirmPasswordContent = "";
        } catch (e) {
            confirmPassword.confirmPasswordContent = e;
        }
    });


});

const addUserDetails = () => {
    let userData = new UserData();
    try {
        userData.userName = getInputValueById("#name");
        userData.userEmail = getInputValueById("#email");
        userData._userPassword = getInputValueById("#password");
        userData.userConfirmPassword = getInputValueById("#confirmPassword")
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    alert (userData.toString());
    return userData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

function createAndUpdateStorage(userData) {

    let userDataList = JSON.parse(localStorage.getItem("UserDataList"));

    if (userDataList != undefined) {
        userDataList.push(userData);
    } else {
        userDataList = [userData]
    }
    alert (userDataList.toString());
    localStorage.setItem("UserDataList", JSON.stringify(userDataList))
}

const save = () => {
    try {
        let userInfo = addUserDetails();
        createAndUpdateStorage(userInfo);
    } catch (e) {
        return;
    }
}
