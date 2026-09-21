<template>
<div>
<primeiroComponente />
<lifeCycle />
<p>propriedade: {{testando}}</p>
<componenteTres/>
</div>
</template>

<script>
    import primeiroComponente from "./components/primeiroComponente.vue"
    import lifeCycle from "./components/lifeCycle.vue"
    import componenteTres from "./components/componente-tres.vue"

    export default {
        name: 'App',
        components: {
            primeiroComponente,
            lifeCycle,
            componenteTres
        },
        data(){
            return{
                testando: "teste"
            }
        }
    }
</script>