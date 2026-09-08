importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAYvdDGSGJDLGTkRR2AAcf6OMZElVRW75E",
  authDomain: "goliath-manager-41208.firebaseapp.com",
  projectId: "goliath-manager-41208",
  storageBucket: "goliath-manager-41208.firebasestorage.app",
  messagingSenderId: "435783362361",
  appId: "1:435783362361:web:6c42b4661538c0e8326ae8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Goliath Manager';
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, { body: body, icon: undefined });
});
