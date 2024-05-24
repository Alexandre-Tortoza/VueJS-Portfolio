<template>
    <div class="block" v-if="showBlock" @click.self="stopTime">
        Click ME !
    </div>
</template>

<script>
export default {
    props:['delay'],
    data(){
       return{
        showBlock: false,
        timer:null,
        reactionTime:0
       }
    },
    mounted(){
        console.log('Mounted')
        setTimeout(() => {
            this.showBlock = !this.showBlock
            this.startTime()
        } ,this.delay)
    },
    updated(){
        console.log('content Update')
    },
    unmounted(){
        console.log('UnMounted');
    },
    methods:{
        startTime(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            },10)
        },
        stopTime(){
            clearInterval(this.timer)
            this.$emit('end',this.reactionTime)
        }
    }

}
</script>

<style>
    .block{
        margin-top: 5rem;
        width: 40vw;
        height: 20vh;
        background-color: rgb(136, 21, 123);
        padding: 5rem;
        margin: auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }
</style>