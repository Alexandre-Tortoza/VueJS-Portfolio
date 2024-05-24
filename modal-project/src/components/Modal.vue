<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <h2>This is a modal</h2>
      <p>Modal content goes here...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
