<template>
    <SingupForm/>
</template>

<script>
import SingupForm from './components/SingupForm.vue'
export default{
  name:'App',
  components:{
    SingupForm
  }
}
</script>

<style>
body{
height: 100vh;
width: 100vw;
background-color: rgb(56, 56, 56);
display: flex;
justify-content: center;
align-items: center;
}
</style>
