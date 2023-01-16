<template>
<div class="main">

    <form action="" @submit.prevent="getWeather()">
        <input type="text" placeholder="Enter the city name" v-model="inputCity">

        <button type="submit">Submit</button>
    </form>

    <!-- <Weather :city="`${inputCity}`" /> -->

</div>
</template>

<script>
import Weather from './components/Weather.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Weather
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

            await axios.get(`https://api.weatherapi.com/v1/current.json?key=ac66a8ffaa8e4d219fd120436231601&q=${this.inputCity}&aqi=no`)
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
