class VerifyUser {

    get email() {
        return this._email;
    }
    
    set email(Email) {
        this._email = Email;
    }
    
    get password() {
        return this._password;
    }
    
    set password(pswrd) {
        this._password = pswrd;
    }
}


const getUserDataFronStorage = () => {
	return localStorage.getItem('userDataList') ? JSON.parse(localStorage.getItem('userDataList')) : [];
}	

let userDataList;
window.addEventListener("DOMContentLoaded", (event) => {
 userDataList = getUserDataFronStorage
});

function check() {
    let verifyUser = new VerifyUser();
    if (userDataList.userEmail.value == verifyUser._email && userDataList.userPassword.value == verifyUser._password){
        window.open("https://www.w3schools.com/");
    }
    else {
        alert("Error Password or Username");
    }
}






// Username<input type="text" name="userid"/>
// Password<input type="password" name="pswrd"/>
// <input type="button" onclick="check(this.form)" value="Login"/>
// <input type="reset" value="Cancel"/>
// </form>
{/* <script language="javascript"> */}

function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
  {
    window.open('target.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}


// const save = () => {
//     try {
//         let userData = addUserDetails();
//         createAndUpdateStorage(userData);
//     } catch (e) {
//         return;
//     }
// }

// const addUserDetails = () => {
//     let userData = new UserData();
//     try {
//         userData.userName = getInputValueById("#name");
//         userData.userEmail = getInputValueById("#email");
//         userData._userPassword = getInputValueById("#password");
//         userData.userConfirmPassword = getInputValueById("#confirmPassword")
//     } catch (e) {
//         setTextValue('.text-error', e);
//         throw e;
//     }
//     alert (userData.toString());
//     return userData;
// }

// const getInputValueById = (id) => {
//     let value = document.querySelector(id).value;
//     return value;
// }

// function createAndUpdateStorage(userData) {

//     let userDataList = JSON.parse(localStorage.getItem("UserDataList"));

//     if (userDataList != undefined) {
//         userDataList.push(userData);
//     } else {
//         userDataList = [userData]
//     }
//     alert (userDataList.toString());
//     localStorage.setItem("UserDataList", JSON.stringify(userDataList))
// }