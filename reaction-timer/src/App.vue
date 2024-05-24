<template>
  <h1>Ninja Timer reaction</h1>
  <button style="margin-bottom: 2rem;" @click="start" :disabled="isPlaying">Start</button>
  <br>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
</template>

<script>
  
import Block from "./components/Block.vue";

  export default{
    name: 'App',
    components:{ Block },
    data(){
      return{
          isPlaying: false,
          delay:null
        }
    },
    methods:{
      start(){
        this.isPlaying = true
        this.delay = 2000 + Math.random() * 5000
        console.log('This delay' + this.delay)
      },
      endGame(reactionTime){
        alert("Parabens! seu tempo foi de: " + reactionTime)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0d0d;
  margin-top: 60px;
}
</style>
