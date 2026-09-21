<template>
<div>
<primeiroComponente />
<lifeCycle />
<p>propriedade: {{testando}}</p>
</div>
</template>

<script>
    import primeiroComponente from "./components/primeiroComponente.vue"
    import lifeCycle from "./components/lifeCycle.vue"

    export default {
        name: 'App',
        components: {
            primeiroComponente,
            lifeCycle
        },
        data(){
            return{
                testando: "teste"
            }
        }
    }
</script>