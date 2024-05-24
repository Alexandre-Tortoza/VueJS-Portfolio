<template>
  <div class="home">
    <h1>Usuarios</h1>
    <hr>
    <button>Cadastrar Novo Usuario</button>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.nome }}
          <router-link :to="{name: 'usuariosDetalhado', params:{id:user.id}}">
            Detalhes
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuarios',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        this.users = data
      })
      .catch(err => {
        console.log(err.message)
      })
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
