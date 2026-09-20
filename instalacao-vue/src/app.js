const nameApp = {
    data(){
        return{
            name: "",
            idade: "",
            input_age: "",
            input_name: ""

        }
    },
        methods: {
            submitForm(e){

                e.preventDefault()

                console.log("nome: ",this.input_name)
                console.log("idade: ",this.input_age)

                this.nome = this.input_name;
                this.idade = this.input_age;
            }
        }
    }

Vue.createApp(nameApp).mount('#app')