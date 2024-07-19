// Your web app's Firebase configuration
 const firebaseConfig = {
            apiKey: "AIzaSyCkNJFimfRBFgwiFRCNDtTPlo8g-2JIc-M",
           authDomain: "login-page-c3c64.firebaseapp.com",
           databaseURL: "https://login-page-c3c64-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "login-page-c3c64",
            storageBucket: "login-page-c3c64.appspot.com",
            messagingSenderId: "426921518510",
            appId: "1:426921518510:web:98a3252f91b0fdeaa5943f",
            measurementId: "G-SKKHTLF0BH"
        };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});
