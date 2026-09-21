<template>
<div>
<h1>Olá Vue!</h1>
<p>Meu nome é {{nome}}, tenho {{idade}} anos e trabalho como {{profissao}}</p>
</div>
</template>

<script>
    export default{
        name: 'primeiroComponente',
        data(){
            return{
                nome: "pedro",
                idade: 18,
                profissao: "programador"
            }
        }

    }
</script>