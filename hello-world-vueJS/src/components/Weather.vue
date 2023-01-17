<template>
<br><br><br><br>
<div class="weather" v-if="data.location">

    <div class="location">
        <h2>{{ data?.location?.name }}</h2>
        <h3>{{ data?.location?.country }}</h3>
    </div>

    <div class="wReport">
        <h2> Temprature --> {{data?.current?.temp_c }}°C</h2>
        <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ data?.current?.condition?.text }}</h3>
        <p> Humidity --> {{data?.current?.humidity }} °C</p>
        <p> Feelslike --> {{data?.current?.feelslike_c }} °C</p>
    </div>

</div>
<div v-else>Enter city name </div>
<br><br><br><br>
<button @click="log">Log</button>
</template>

<script>
export default {
    name: 'Weather',
    props: ['data'],

    data() {
        return {

        }
    },
    methods: {
        log() {
            console.log('weather ===>', this.data);
        }
    }
}
</script>

///////////////  ac66a8ffaa8e4d219fd120436231601
