<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password</label>
        <input type="password" required v-model="password">        
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password     }}</p>
</template>

<script>
export default {
    data(){
        return{
            email: 'Qual o seu EMail ?',
            password: ''
        }
    }
}
</script>

<style scoped>
    form{
        background-color: rgb(238, 238, 238);
        width: 60vw;
        height: 50vh;
        margin: auto;
        border-radius:15px ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>