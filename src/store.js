import Firebase from 'firebase'
import uuid from "uuid";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAX8t4SHSp-dcYpi_McXcToIS44Dkqzf88",
  authDomain: "taju-ca821.firebaseapp.com",
  databaseURL: "https://taju-ca821.firebaseio.com",
  storageBucket: "taju-ca821.appspot.com",
  messagingSenderId: "775046190867"
};

let app = Firebase.initializeApp(config)
let db = app.database()


let store = {
  addAnswer(answer) {
    let plain = Object.assign({}, answer);

    delete plain[".key"];
    plain.id = uuid.v4();
    plain.date = new Date().toISOString();

    db.ref('answers/' + plain.id).set(plain)
  }
}

export {store}
