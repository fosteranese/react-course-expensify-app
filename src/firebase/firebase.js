import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e)=>{
//     console.log('Fetching data failed', e);
// });



// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })
//     .catch((e)=>{
//         console.log('Fetching data failed', e);
//     });

// const expenses = [{
//     description: 'first one',
//     note: 'note that',
//     amount: 20,
//     createAt: 78
// }, {
//     description: 'second one',
//     note: 'another that',
//     amount: 650,
//     createAt: 54325342
// }, {
//     description: 'third one',
//     note: 'yea! year! another note',
//     amount: 90,
//     createAt: 4567
// }];

// expenses.map((expense) => database.ref('expenses').push(expense));


// database.ref('notes/-M4fNp3Mo6m1yO3gT91i').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular'
// });


// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.location.city}`);
// });

// setTimeout(()=>{
//     database.ref().update({
//         name: 'Foster Anese',
//         'job/title': 'Software Engineer',
//         'location/city': 'Canada'
//     });
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error)=>{
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Sir Foster',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Oyibi',
//         country: 'Ghana'
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This failed.', e);
// });

// database.ref().set('This is my data');

// database.ref('age').set(29);
// database.ref('location/city').set('Canada');



// database.ref('attributes').set({
//     height: 6.1,
//     weight: 100
// }).then(()=>{
//     console.log('Data is saved!');
// }).catch((error)=>{
//     console.log('This failed.', error);
// });

// database.ref('isSingle').remove()
//     .then(()=>{
//         console.log('Data removed');
//     })
//     .catch((e)=>{
//         console.log('This failed', e);
//     });

// database.ref('isSingle').set(null);

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });