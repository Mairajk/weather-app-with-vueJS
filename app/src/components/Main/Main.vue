<template>
<div>
    <h1>Welcome</h1>
    <Login />
</div>
</template>

<script>
import Login from './Auth/Login.vue'
export default {
    name: 'Main-vue',
    components: {
        Login
    }
}
</script>
