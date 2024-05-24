<template>
  <div>
    <h1>Meu modal</h1>
    <div v-if="showModal">
      <Modal @close='modalToggle'/>
    </div>
    <button @click="modalToggle">Open Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Alex123',
      showModal: false
    }
  },
  methods: {
    modalToggle() {
      this.showModal = !this.showModal
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
