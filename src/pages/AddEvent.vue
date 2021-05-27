<template>
     <div>
    <hr />

    <div>
      <h2>Event Details</h2>
      <hr />
      <form @submit.prevent="submitDet()">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Time</label>
          <input type="text" class="form-control" v-model="time" />
        </div>
        <div class="form-group">
          <label>Location</label>
          <textarea class="form-control" v-model="location"> </textarea>
        </div>
         <div class="form-group">
          <label>Description</label>
          <textarea class="form-control" v-model="description"> </textarea>
        </div>

        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Create</button>
          <hr />
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import firebase from "firebase";

export default {
    data() {
        return {
            name:'',
            time:'',
            location:'',
            description:'',
        }
    },
    methods:{
        submitDet(){
            firebase.firestore().collection("events").doc(this.name).set({
                name:this.name,
                time:this.time,
                loc:this.location,
                desc:this.description
            })
                this.name='',
            this.time='',
            this.location='',
            this.description=''
            
            
        }

    }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
