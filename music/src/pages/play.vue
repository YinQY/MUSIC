<template>
    <div></div>
</template>

<script>
import CONSTANTS from '../assets/js/constants'
export default {
    data() {
        return {
           
        }
    },
    mounted() {
            this.axios.get(`${CONSTANTS.SERVER_HOST}test`);
    },
}
</script>

<style lang="stylus">
    
</style>