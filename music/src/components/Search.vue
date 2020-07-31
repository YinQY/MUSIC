<template>
    <div id="search-box">
        <transition name="search-input-ani" @before-enter='searchInputFocus' @after-leave='searchInputBlur'>
            <label class="search-label" v-if="isFocusSearchInput" :key="isFocusSearchInput ? 'focus' : 'blur'">请输入歌手或歌曲</label>
        </transition>
        <input type="text" placeholder="请输入歌手或歌曲" autofocus class="search-input" @focus="isFocusSearchInput = true" @blur="isFocusSearchInput = false">
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            isFocusSearchInput:false
        }
    },
    methods:{
        searchInputFocus(){
            document.querySelector('.search-input').setAttribute('placeholder','');
        },
        searchInputBlur(){
            document.querySelector('.search-input').setAttribute('placeholder','请输入歌手或歌曲');
        }
    }
}
</script>

<style lang="stylus">
    #search-box{
        position relative
        width 100%;
        margin-top 50px

        .search-label{
            position absolute
            left calc(50% - 95px)
            top -8.5px
            background-color #fff
            font-size 12px
            color rgb(236,76,99)
        }

        .search-input{
            display block
            width 50%
            max-width 200px
            min-width 80px
            height 25px
            padding 5px 10px
            border 1px solid #999
            border-radius 5px
            color #999
            margin 0 auto;
            
            &:focus{
                outline none
                border 1px solid rgb(236,76,99)
            }
        }
    }

    .search-input-ani-enter{
        opacity 0
        transform translateY(8.5px)
    }
    .search-input-ani-enter-active{
        transition all .3s ease-out
    }

    .search-input-ani-leave-active{
        transition all .3s ease-out
    }
    .search-input-ani-leave-to{
        opacity 0
        transform translateY(8.5px)
    }
</style>