<template>
<div>
    <h1>This is Ref Component</h1>

    <input type="text" ref="inp">
    <button @click="handler">Handler</button>

</div>
</template>

<script>
export default {
    name: 'Ref-vue',
    components: {},

    data() {
        return {
            input1: ''
        }
    },
    methods: {
        handler() {
            console.log('handler', this.$refs.inp.value);
        }
    }
}
</script>
