import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

firebase.initializeApp({

  apiKey: "AIzaSyAeqV7BWeB7Sfy326T8qLjPMbQChY1UpN0",
  authDomain: "vue-calendar-f002d.firebaseapp.com",
  databaseURL: "https://vue-calendar-f002d.firebaseio.com",
  projectId: "vue-calendar-f002d",
  storageBucket: "vue-calendar-f002d.appspot.com",
  messagingSenderId: "656526317164",
  appId: "1:656526317164:web:c969e2af101755370faa49"

})

export const db = firebase.firestore();


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
