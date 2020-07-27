<template>
    <div :class="['music-box',isControlMinify ? 'sm' : 'bg']" @click="maxMusicControl">
        <div class="header-box">
            <div class="music-header"></div>
            <div class="music-title">未在播放</div>
        </div>
        <ul class="control-box">
            <li class="control-item control-item-pre"></li>
            <li class="control-item control-item-play" v-if="!isPlay" @click="changeMusicPlay($event)"></li>
            <li class="control-item control-item-pause" v-if="isPlay" @click="changeMusicPlay($event)"></li>
            <li class="control-item control-item-next"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'music-box',
    props:{
        isControlMinify:{
            type:Boolean,
            required:true
        }
    },
    data() {
        return {
            isPlay:false,
            
        }
    },
    methods:{
        //最大化音乐播放控制器的窗口
        maxMusicControl(){
            this.$emit('maxMusicControl');
        },
        //改变音乐播放还是暂停
        changeMusicPlay(e){
            this.isPlay = !this.isPlay;   
            if(e){
                e.stopPropagation();//非IE浏览器
            }else{
                window.event.cancelBubble = true;//IE浏览器
            }
        }
    }

}
</script>

<style lang="stylus">
    .music-box{
        display flex
        position fixed
        z-index 1001

        .music-header{
            background-image url('../assets/images/default-music-header.svg')
        }
        .music-title{
            overflow hidden
            white-space nowrap
        }

        .header-box{
            display flex
        }

        .control-box{
            list-style none
            display flex

            .control-item{
                width 30px
                height 30px
                background-repeat no-repeat
                background-position center
                background-size 100%
            }

            .control-item-pre{
                background-image url("../assets/images/previous-music.svg")
            }
            .control-item-play{
                background-image url("../assets/images/play-music.svg")
            }
            .control-item-pause{
                background-image url("../assets/images/pause-music.svg")
            }
            .control-item-next{
                background-image url("../assets/images/next-music.svg")
            }
        }
    }

    .music-box.sm{
        align-items center
        justify-content space-between
        left 0
        right 0
        bottom 46px
        height 60px
        margin 0
        padding 3px 10px
        box-sizing border-box
        background-color #F7F7F7
        
        .header-box{
            align-items center

            .music-header{
                width 39px
                height 39px
                margin-right 5px;
                border-radius 5px
                box-shadow 0 2px 5px rgba(0,0,0,.2)
                background-repeat no-repeat
                background-position center
                background-size 100%
            }

            .music-title{
                max-width 100px
            }

        }
    }

    .music-box.bg{
        flex-direction column
        left 0
        top 0
        bottom 0
        right 0

        .header-box{
            align-items center
            width 100%

            .music-header{
                width 30%
                max-width 300px
                background-repeat no-repeat
                background-position center
                background-size 100%

                &:before{
                    content ''
                    padding-top 100%
                    display block
                }
            }
        }
    }
</style>