
function regRestaurant() {
    window.location = "register restaurant.html"
};


function regUser() {
    window.location = "register User.html"
};

// ================================================================
// ================ Restaurant Registeration values ===============
// ================================================================

let RrestaurantEl = document.getElementById('restauratR')
let RemailEl = document.getElementById('emailR')
let RcountryEl = document.getElementById('countryR')
let RcityEl = document.getElementById('cityR')
let RpasswordEl = document.getElementById('passwordR')

let storage = firebase.storage();
let auth = firebase.auth();

// ================Register Restaurant Function===============

function registerRestaurant() {
    auth.createUserWithEmailAndPassword(RemailEl.value, RpasswordEl.value)
        .then((userRcredential) => {
            var userR = userRcredential.userR;
            window.location = "signIn.html"

            console.log(userR, userRcredential);
            //     var dataToSave = {
            //         email: user.email,
            //         userName: usernameEl.value,
            //         UID: user.uid,
            //         userPic: url,
            //         userRole: 'donor'
            //     }

            //     saveUserInFirestore(dataToSave);
            // })
            // .catch((error) => {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     console.error(error);
            //
        }
        );
}






















// ================================================================
// ================ User Registeration values ===============
// ================================================================

let UusernameEl = document.getElementById('usernameU')
let UemailEl = document.getElementById('emailU')
let UphoneEl = document.getElementById('phoneU')
let UcountryEl = document.getElementById('countryU')
let UcityEl = document.getElementById('cityU')
let UpasswordEl = document.getElementById('passwordU')

// ================Register USER Function===============

function registerUser() {
    auth.createUserWithEmailAndPassword(UemailEl.value, UpasswordEl.value)
        .then((userUcredential) => {
            var userU = userUcredential.userU;
            window.location = "signIn.html"

            console.log(userU, userUcredential);
            //     var dataToSave = {
            //         email: user.email,
            //         userName: usernameEl.value,
            //         UID: user.uid,
            //         userPic: url,
            //         userRole: 'donor'
            //     }

            //     saveUserInFirestore(dataToSave);
            // })
            // .catch((error) => {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     console.error(error);
            //
        }
        );
}




// ================================================================
// ========================= Log in values ========================
// ================================================================

let emailEL = document.getElementById('email')
let passwordEL = document.getElementById('password')


function logIn(){
    auth.signInWithEmailAndPassword(emailEL.value, passwordEL.value)
        .then((userCredential) => {
            console.log(userCredential);
            window.location = "home.html";
            // saveUserInFirestore();
        })
        .catch((error) => {
            console.error(error);
        })
}
























// ================================================================
// =========================== Home Page ==========================
// ================================================================

