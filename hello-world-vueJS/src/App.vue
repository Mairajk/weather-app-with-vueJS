<template>
<div class="main">

    <form action="" @submit.prevent="getWeather()">
        <input type="text" placeholder="Enter the city name" v-model="inputCity">

        <button type="submit">Submit</button>
    </form>

    <Weather :data="weatherData" />

</div>
</template>

<script>
import Weather from './components/Weather.vue';
import axios from 'axios';
import {
    onMounted
} from "vue";

export default {
    name: 'App',
    components: {
        Weather
    },
    mounted() {
        console.log('onMounted');
    },
    data() {
        return {
            inputCity: '',
            weatherData: []
        }
    },

    methods: {

        async getWeather() {
            // event.preventDefault();

            await axios.get(`https://api.weatherapi.com/v1/current.json?key=bf30ea59efc941f5bf055856231701&q=${this.inputCity}&aqi=no`)
                .then((res) => {

                    console.log('response ==>', res);
                    this.weatherData = res.data;

                    console.log('city ===>', this.inputCity);
                    console.log('data ===>', this.weatherData);
                })
                .catch((error) => {
                    console.log('error ===> ', error);
                })
        }

    }
}
</script>
