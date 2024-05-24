<template>
  <div>
    <h1>Detalhes do Usuário</h1>
    <span>Usuário de ID: {{ id }}</span>
    <hr>
    <div v-if="user">
      <h2>{{ user.nome }}</h2>
      <h2>{{ user.id }}</h2>
    </div>
    <div v-else>
      <span>Carregando...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      user: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/users?id=' + this.id)
      .then(res => res.json())
      .then(data => this.user = data[0]) // assuming only one user is returned
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
