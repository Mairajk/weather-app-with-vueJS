<template>
<h1>{{a}}</h1>
<button @click="increment(1)"> increment </button>
<br><br><br>
<input type="text" v-model="city">
<button @click="callApi(city)">Data</button>
<br><br><br>
<!-- <Main /> -->
<Ref />
</template>

<script>
// import Main from "./components/Main.vue";
import {
    mapActions,
    mapMutations,
    mapState
} from "vuex";

import Ref from "./components/Ref.vue";

export default {
    name: 'App',

    components: {
        Ref,
    },
    data() {
        return {
            weatherData: [],
            num: '',
            city: '',
        }
    },

    computed: {
        ...mapState(['a', 'data', ]),
    },

    methods: {
        ...mapMutations(['increment', 'caller']),
        ...mapActions(['callApi', 'setData']),
    },

    watch: {
        '$store.state.a': function () {
            console.log('this.$store.state.a ==>', this.$store.state.a)
        },

        '$store.state.data': function () {
            console.log('this.$store.state.data ==>', this.$store.state.data)
        },

    }
}
</script>
