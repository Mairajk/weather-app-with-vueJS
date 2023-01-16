<template>
<div class="main">

    <form action="" v-on:submit="getWeather(e)">
        <input type="text" placeholder="Enter the city name" @v-model="inputCity">

        <button type="submit">Submit</button>
    </form>

    <!-- <Weather :city="`${inputCity}`" /> -->

</div>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
    name: 'App',
    components: {
        Weather
    },

    data() {
        return {
            weatherData: []
        }
    },

    methods: {

        getWeather(e) {
            // e.preventDefault();

            try {
                const data = axios.get(`https://api.weatherapi.com/v1/current.json?key=ac66a8ffaa8e4d219fd120436231601&q=${this.city}&aqi=no`);
                this.weatherData = data;

                console.log('city ===>', this.city);
                console.log('data ===>', this.weatherData);

            } catch (error) {
                console.log('error ===> ', error);
            }
        }

    }
}
</script>
