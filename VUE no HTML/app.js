const app = Vue.createApp({
    data(){
        return{
            showMovies:'false',
            title: "Senhor dos Aneis.",
            author:"J.K.R.",
            age:"81"
        }
    },
    methods:{
        changeTitle(){
            this.title = 'O Senhor dos Anéis: A Sociedade do Anel'
        },
        toggleMovies(){
            this.showMovies = !this.showMovies
        }
    }
})

app.mount('#app')
