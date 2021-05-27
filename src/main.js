

import { createApp } from 'vue'
import App from './App.vue'
import SignUp from './pages/SignUp.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/Home.vue'
import AddEvent from './pages/AddEvent.vue'
import { createRouter, createWebHistory } from "vue-router";

import firebase from 'firebase'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCTFkRO8hmwN3T7Gfrj8eFPDsS55JHz5Fs",
    authDomain: "events-b348d.firebaseapp.com",
    projectId: "events-b348d",
    storageBucket: "events-b348d.appspot.com",
    messagingSenderId: "36784890313",
    appId: "1:36784890313:web:8da0c6fb6db691b8854818",
    measurementId: "G-46MKX5J75T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const  routes = [
    {
        path: "/",
        component: HelloWorld


    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/add",
        component:AddEvent
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  


  const app = createApp(App)
  app.use(router);
  app.mount('#app')



