    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAvLXJlyLLCNokvPuOBl_C_yZgcERuv7cg",
        authDomain: "todolist-683fc.firebaseapp.com",
        projectId: "todolist-683fc",
        storageBucket: "todolist-683fc.appspot.com",
        messagingSenderId: "714910061471",
        appId: "1:714910061471:web:c8a9ffb601eabc084163aa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebase.auth();