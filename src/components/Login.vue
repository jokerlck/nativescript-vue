<template>
  <Page class="page">
    <ActionBar class="action-bar" flat="true"/>

    <StackLayout class="container">
        <Image src="~/images/NativeScript-Vue.png"/>
        <StackLayout class="login-form">
            <TextField v-model="user.username" hint="Username" class="text-input" autocorrect=false />
            <TextField v-model="user.password" hint="Password" class="text-input" autocorrect=false />

            <Button text="Login" @tap="login" class="btn btn-success"/>
            <Button text="Register" @tap="register" class="btn btn-reverse-success"/>
        </StackLayout>
    </StackLayout>

  </Page>
</template>

<script>
    import axios from "axios";
    // import home from "./Home";

    const http = require("http");

    export default {
        data () {
            return {
                user: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            login () {
                http.getJSON("https://rdapps.rchk.edu.hk/api")
                .then((res) => {
                    if(res.Message == 'Server Access'){
                        // this.$showModal(home);
                        this.$router.push('/home')
                    }
                }, (err) => {
                    console.log(err)
                });
            },
            register () {
                this.$router.push('/register')
            }
        }
    };
</script>

<style scoped>
    .container {
        margin: 20;
    }
    .login-form{
        margin: 25px 0 25px 0;
    }
    .text-input{
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        margin-top: 20px;
        color: #43b883;
        placeholder-color: #fff;
    }

    .login-status-bar{
        background-color: #303030
    }

</style>
