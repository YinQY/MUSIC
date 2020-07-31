<template>
<transition :name="isControlMinify ? 'music-min-ani' : 'music-max-ani'">
    <div :class="['music-box',isControlMinify ? 'sm' : 'bg']" :key="isControlMinify ? 'sm' : 'bg'" @click="changeMusicControlSize" @touchstart="activeOrdinate = [$event.targetTouches[0].clientX,$event.targetTouches[0].clientY]" @touchmove.stop="slideMusicControl" @touchend="touchendMusicControl">
        <div class="control-minify-botton" v-if="!isControlMinify"></div>
        <div class="header-box">
                <div :class="['music-header',isControlMinify ? 'sm' : 'bg']"></div>
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
            isPlay: false,
            activeOrdinate: [0,0],
        }
    },
    methods:{
        //最大化音乐播放控制器的窗口
        changeMusicControlSize(e){
            if(this.isControlMinify){
                this.$emit('changeMusicControlSize');
            }else{
                if(e.target.className === 'control-minify-botton'){
                    this.$emit('changeMusicControlSize');
                }
            }
        },
        //改变音乐播放还是暂停
        changeMusicPlay(){
            this.isPlay = !this.isPlay;
        },
        //滑动最大化的音乐控制窗口
        slideMusicControl(e){
            if(this.isControlMinify) return;
            let offsetY = e.targetTouches[0].clientY - this.activeOrdinate[1];
            e.currentTarget.style.top = (offsetY > 0 ? offsetY : 0) + 'px';
            e.currentTarget.style.bottom = -(offsetY > 0 ? offsetY : 0) + 'px';
        },
        //结束滑动最大化的音乐控制窗口
        touchendMusicControl(e){
            if(this.isControlMinify) return;
            let offsetY = parseInt(e.currentTarget.style.top.split('px')[0]);
            if(offsetY >= window.screen.height / 3){
                this.$emit('changeMusicControlSize');
            }else{
                e.currentTarget.style.top = 0;
                e.currentTarget.style.bottom = 0;
            }
            //if()
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

        .control-minify-botton{
            position relative
            width 100%
            height 30px

            &:before{
                content ''
                position absolute
                left calc(50% - 30px)
                top calc(50% - 5px)
                width 60px
                height 10px
                border-radius 10px
                background-color:rgba(200,200,200,.5)
            }
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

    .music-max-ani-enter{
        transform translateY(calc(100% - 106px))
    }

    .music-max-ani-enter-active{
        transition transform .3s ease-out
    }

    .music-max-ani-enter-active .music-header{
        animation music-header-max-bounce .3s ease-out
    }
    @keyframes music-header-max-bounce{
        0%{
            transform scale(0.3)
        }
        100%{
            transform scale(1)
        }
    }

    .music-min-ani-enter-active{
        animation music-min-bounce .3s ease-out
    }
    @keyframes music-min-bounce {
        0% {
            height 100px
        }
        100%{
            height 60px
        }
    }

    .music-min-ani-enter-active .music-header{
        animation music-header-min-bounce .3s ease-out
    }
    @keyframes music-header-min-bounce {
        0%{
            transform scale(1.5)
        }
        100%{
            transform scale(1)
        }
    }


</style>