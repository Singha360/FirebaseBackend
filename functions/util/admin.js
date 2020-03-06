const admin = require("firebase-admin");
var serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-3f8e7.firebaseio.com",
  storageBucket: "socialape-3f8e7.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
