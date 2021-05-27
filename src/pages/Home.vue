<template>
<div class="card" v-for="event in events" :key="event.name">
  <div class="card-header">
    <h2>{{event.name}}</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">Time :-{{event.time}}</h5>
    <p class="card-text">Location: - {{event.loc}}</p>
     <p class="card-text">Description:- {{event.desc}}</p>
    <a href="#" class="btn btn-primary" @click.prevent="joinEvent(event.name,event.time)">Join</a>
    <div v-if="show">Done! registered</div>
  </div>
</div><span>  </span>

</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      events:[],
      show:false

    }
  },
  mounted(){
    firebase.firestore().collection("events").get().then(res =>{
      res.docs.forEach(snap => {
        this.events.push(snap.data())
      })
    })
  },
  methods:{
    joinEvent(name,time){
      let cu =firebase.auth().currentUser.uid
      
            firebase.firestore().collection("Users").doc(cu).collection("joins").doc(name).set({
               name:name,
               time:time
            })
             setTimeout( ()=>{
                    this.show = true;
                }, 2000);
                this.show=false
          
           

    }
    

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
