<template>
    <div>
        <music-box :isControlMinify="isControlMinify" @maxMusicControl="maxMusicControl"></music-box>
        <nav-footer :isControlMinify="isControlMinify"></nav-footer>
    </div>
</template>

<script>
//import CONSTANTS from '../assets/js/constants'
import navFooter from '../components/Footer'
import musicBox from '../components/MusicBox'
export default {
    data() {
        return {
           isControlMinify:true,
        }
    },
    components:{
        navFooter,
        musicBox
    },
    methods:{
        maxMusicControl(){
            if(this.isControlMinify){
                this.isControlMinify = !this.isControlMinify;
            }
        }
    }
}
</script>

<style lang="stylus">
    
</style>