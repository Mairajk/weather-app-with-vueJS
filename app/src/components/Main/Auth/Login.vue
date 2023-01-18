<template>
<div>
    <h1> Login </h1>

    <form>
        <input type="email" v-model="userData.inpEmail" required placeholder="Enter your email">
        <br><br>
        <input type="password" v-model="userData.inpPass" required placeholder="Enter your password">
        <br><br><br>
        <button type="submit"> Login </button>
    </form>

</div>
</template>

<script>
import {
    mapActions,
    mapState,
} from "vuex"

export default {
    name: 'Login-vue',
    data() {
        return {
            userData: {
                inpPass: '',
                inpEmail: ' ',
            }
        }
    },
    computed: {
        ...mapState([])
    },
    methods: {
        ...mapActions([]),
    },
    watch: {
        '$store.state.isLogin': function () {
            console.log(this.$store.state)
        }
    }
}
</script>
