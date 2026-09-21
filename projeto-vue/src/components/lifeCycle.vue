<template>
<div>
<h1>Meu nome é: {{nome}}</h1>


</div>
</template>

<script>
    export default {
        name: 'lifeCycle',
        data(){
        return{
            nome: "teste"
        }
    },
    created(){
        setTimeout(() => {
            this.nome = "Pedro"
        }, 1000);
        
    },
    mounted(){
        setTimeout(() => {
            this.nome = "roger"
        }, 2000);
        
    }
}
    

</script>