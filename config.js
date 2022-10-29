import firebase from 'firebase'


 const firebaseConfig = {
  apiKey: "AIzaSyD-0bY4CXTXF8zVtnpWRphxqu8XnezwJFg",
  authDomain: "job-search-charvi-b3917.firebaseapp.com",
  databaseURL: "https://job-search-charvi-b3917-default-rtdb.firebaseio.com",
  projectId: "job-search-charvi-b3917",
  storageBucket: "job-search-charvi-b3917.appspot.com",
  messagingSenderId: "384679548337",
  appId: "1:384679548337:web:4614427d0f7d356c781990"
};

firebase.initializeApp(firebaseConfig)

export default firebase