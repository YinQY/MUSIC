<template>
<transition :name="isControlMinify ? '' : 'music-ani'">
    <div :class="['music-box',isControlMinify ? 'sm' : 'bg']" :key="isControlMinify ? 'sm' : 'bg'" @click="maxMusicControl">
        <div class="header-box">
            <transition :name="isControlMinify ? '' : 'music-header-ani'">
                <div :class="['music-header',isControlMinify ? 'sm' : 'bg']" :key="isControlMinify ? 'sm-header' : 'bg-header'"></div>
            </transition>
            <div class="music-detail">
                <div class="music-title">未在播放</div>
                <div class="music-singer" v-if="!isControlMinify">作者</div>
            </div>
        </div>
        
        <ul class="control-box">
            <li class="progress-bar" v-if="!isControlMinify"></li>
            <li class="control-item control-item-pre"></li>
            <div class="control-play-box">
                <transition name="control-play">
                    <li class="control-item control-item-play" v-if="!isPlay" @click.stop="changeMusicPlay" key="control-item-play"></li>
                    <li class="control-item control-item-pause" v-if="isPlay" @click.stop="changeMusicPlay" key="control-item-pause"></li>
                </transition>
            </div>
            <li class="control-item control-item-next"></li>
        </ul>
    </div>
</transition>
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
        changeMusicPlay(){
            this.isPlay = !this.isPlay;
        }
    }

}
</script>

<style lang="stylus">
    .music-box{
        display flex
        position fixed
        left 0
        right 0
        z-index 1001
        background-color rgba(230,230,230,.8)
        overflow hidden
        
        &:before{
            content ''
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            background-position center
            background-size 500%
            background-repeat no-repeat
            background-attachment fixed
            filter  blur(20px)
            margin -30px
            z-index -1
        }

        .music-header{
            transform-origin 0 100%

            &:before{
                content:''
            height 100%
            display block
            background-image url('../assets/images/default-music-header.svg')
            }

        }
        
        .music-detail{
            max-width 100px
            overflow hidden
            white-space nowrap

        }

        .header-box{
            display flex
        }

        .control-box{
            display flex
            padding 0
            margin 0
            list-style none

            .control-play-box{
                width 35px
                height 35px
                overflow hidden
            }

            .control-item{
                width 35px
                height 35px
                border-radius 50px
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
        bottom 46px
        height 60px
        margin 0
        padding 3px 10px
        box-sizing border-box
        
        .header-box{
            align-items center

            .music-header{
                width 39px
                height 39px
                margin-right 5px
                border-radius 5px
                box-shadow 0 2px 5px rgba(0,0,0,.2)

                &:before{
                    background-repeat no-repeat
                    background-position center
                    background-size auto 100%
                }
            }
        }
    }

    .music-box.bg{
        flex-direction column
        top 0
        bottom 0

        &:before{
            //background-image:url('../assets/images/test.jpg');
        }

        .header-box{
            flex-wrap wrap
            align-items center
            width 100%
            flex-basis 80%
            

            .music-header{
                flex-basis 100%
                height 60%
                max-height 250px
                background-color red

                &:before{
                    background-repeat no-repeat
                    background-position center
                    background-size auto 100%
                }
            }

            .music-detail{
                flex-basis 100%
                align-self flex-end
            }
        }

        .control-box{
            width 100%
            min-height 80px
            padding 10px 0
            flex-wrap wrap
            justify-content space-around

            .progress-bar{
                flex-basis 100%
                height 10px
                background-color red
            }

            .control-play-box{
                width 50px
                height 50px
            }

            .control-item{
                width 50px
                height 50px 
            }
        }
    }

    /**transition */
    .control-play-enter-active{
        animation control-item-bounce .3s ease
    }

    @keyframes control-item-bounce {
        0% {
            transform scale(0.7)
        }
        100%{
            transform scale(1)
        }
    }

    .music-ani-enter{
        transform translateY(calc(100% - 106px))
    }

    .music-ani-enter-active{
        transition transform .2s ease-out
    }

    .music-header-ani-enter-to{
        animation music-header-bounce 4s ease-out
    }

    @keyframes music-header-bounce {
        0% {
            opacity 0
            transform scale(0)
        }
        100%{
            opacity 1
            transform scale(1)
        }
    }
</style>