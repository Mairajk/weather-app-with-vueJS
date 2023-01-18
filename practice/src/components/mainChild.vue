<template>
<div>
    <h1>This is Child Component</h1>
    <br><br><br>
    <button @click="log">Change</button>
</div>
</template>

<script>
export default {
    name: ' Child-vue',

    components: {},

    data() {
        return {
            val: 1
        }
    },
    methods: {
        log() {
            this.val += 2;
            this.$emit('changeVal', this.val)
            console.log('This is log', this.val);
        }
    }
}
</script>
