<template>
    <div>
        <div id='loading-box' v-if="!pageIsCompleted"></div>
        <div v-if="pageIsCompleted">
            <search v-if="isSearch"/>
            <music-box :isControlMinify="isControlMinify" @changeMusicControlSize="changeMusicControlSize"/>
            <nav-footer @footerItemChange="footerItemChange" :isControlMinify="isControlMinify" :isSearch="isSearch"/>
        </div>
    </div>
</template>

<script>
//import CONSTANTS from '../assets/js/constants'
import navFooter from '../components/Footer'
import musicBox from '../components/MusicBox'
import search from '../components/Search.vue'
export default {
    data() {
        return {
           isControlMinify: true,
           isSearch: true,
           pageIsCompleted: false,
        }
    },
    mounted(){
            let promiseAll = [];
            let imgs = [
                require('../assets/images/loading.svg'),
                require('../assets/images/previous-music.svg'),
                require('../assets/images/play-music.svg'),
                require('../assets/images/pause-music.svg'),
                require('../assets/images/next-music.svg'),
                require('../assets/images/default-music-header.svg'),
                require('../assets/images/test.jpg'),
                'https://pixabay.com/get/52e3dd474950b114f6da8475c6283f78083edbec5553734972287c.jpg'
            ];
           let imgsLength = imgs.length;

            for(let i = 0;i < imgsLength;i++){
                promiseAll[i] = new Promise((resolve,reject)=>{
                    let image = new Image();
                    image.onload = function(){
                        resolve();
                    }
                    image.onerror = function(){
                        reject();
                    }
                    image.src = imgs[i];
                });
            }
             Promise.all(promiseAll).then(()=>{
                this.pageIsCompleted = true;
            })
    },
    components:{
        navFooter,
        musicBox,
        search
    },
    methods:{
        //预加载图片等文件
        preload(){
            

        },
        //改变音乐控制台的最大化和最小化
        changeMusicControlSize(){
                this.isControlMinify = !this.isControlMinify;
        },
        //点击列表或者搜索按钮
        footerItemChange(isSearch){
            this.isSearch = isSearch;
        }
    }
}
</script>

<style lang="stylus">
    #loading-box{
        position absolute;
        left 0
        top 0
        right 0
        bottom 0
        background-color rgb(230,230,230)
        background-image url('../assets/images/loading.svg')
        background-position center center
        background-repeat no-repeat
        background-size auto 50px
    }
</style>