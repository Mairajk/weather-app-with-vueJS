<template>
<div>
    <h1> This is Main component</h1>
    <br><br><br><br><br>
    <Child @changeVal="changeVal" />
</div>
</template>

<script>
import Child from "./mainChild.vue";
export default {
    name: 'Main-vue',
    components: {
        Child
    },

    data() {
        return {
            value: ""
        }
    },
    methods: {
        changeVal(val) {
            this.value = val
            console.log('Value ===========>', this.value);
            console.log('val ===========>', val);
        }
    },
}
</script>
