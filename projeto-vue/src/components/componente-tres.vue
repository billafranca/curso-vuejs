<template>
    <div>
    <p>Terceiro componente: {{ terceiro }}</p>
    </div>
</template>

<script>
export default {
    name: 'componenteTres',
    data(){
        return{
            terceiro: "Fazendo um terceiro componente"
        }
    },
    mounted(){
        setTimeout(()=>{
            this.terceiro = "Terceiro componente pelo mounted"
        },2000)
    }
}
</script>

<style>
</style>
