<template>
        <footer id="footer" v-if="isControlMinify">
            <div :class="['footer-nav-item',isSearch ? 'active' : '']" @click="isSearch = !isSearch">
                <svg t="1595840626440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1753" width="23" height="23"><path d="M887 840.4L673.4 624.8c41.8-52.4 67-118.8 67-191 0-169-137-306-306.2-306S128 265 128 434s137 306 306.2 306c73.2 0 140.2-25.6 193-68.4l212.2 214.2c6.4 6.8 15.2 10.2 23.8 10.2 8.2 0 16.4-3 22.6-9 13.2-12.6 13.6-33.4 1.2-46.6z m-452.8-166.2c-64.2 0-124.6-25-170-70.4-45.4-45.4-70.4-105.8-70.4-169.8 0-64.2 25-124.6 70.4-169.8 45.4-45.4 105.8-70.4 170-70.4s124.6 25 170 70.4c45.4 45.4 70.4 105.8 70.4 169.8 0 64.2-25 124.6-70.4 169.8-45.4 45.4-105.8 70.4-170 70.4z" p-id="1754" fill="#949494"></path></svg>
                搜索
            </div>
            <div :class="['footer-nav-item',isSearch ? '' : 'active']" @click="isSearch = !isSearch">
                <svg t="1595840868329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2691" width="23" height="23"><path d="M896 256h-288a32 32 0 1 1 0-64h288a32 32 0 1 1 0 64z m0 160h-288a32 32 0 1 1 0-64h288a32 32 0 1 1 0 64z m0 256h-288a32 32 0 1 1 0-64h288a32 32 0 1 1 0 64z m0 160h-288a32 32 0 1 1 0-64h288a32 32 0 1 1 0 64zM384 480H192c-52.928 0-96-43.072-96-96V192c0-52.928 43.072-96 96-96h192c52.928 0 96 43.072 96 96v192c0 52.928-43.072 96-96 96zM192 160c-17.632 0-32 14.368-32 32v192c0 17.632 14.368 32 32 32h192c17.632 0 32-14.368 32-32V192c0-17.632-14.368-32-32-32H192z m192 768H192c-52.928 0-96-43.072-96-96v-192c0-52.928 43.072-96 96-96h192c52.928 0 96 43.072 96 96v192c0 52.928-43.072 96-96 96zM192 608c-17.632 0-32 14.336-32 32v192c0 17.664 14.368 32 32 32h192c17.632 0 32-14.336 32-32v-192c0-17.664-14.368-32-32-32H192z" p-id="2692" fill="#949494"></path></svg>
                列表
            </div>
        </footer>
</template>

<script>
export default {
    name:'nav-footer',
    props:{
        isControlMinify:{
            type:Boolean,
            required:true
        }
    },
    data() {
        return {
            isSearch: true,
        }
    },
    methods:{

    }
}
</script>
<style lang="stylus">
    #footer{
        display flex;
        justify-content space-around
        position fixed;
        left 0
        right 0
        bottom 0
        height 45px
        margin 0
        padding 0
        border-top: 1px solid rgba(198,198,200,.6)
        background-color #F7F7F7
        &:before{
            content ''
            position absolute 
            top 0
            right 0
            bottom 0
            left 0
            filter blur(20px)
            z-index -1
            margin -30px
        }
        .footer-nav-item{
            color rgba(148,148,148,.95)
            display flex
            flex-direction column
            font-size 14px
            box-sizing border-box
            padding 4px 10px
            svg path{
                fill rgba(148,148,148,.95)
            }
        }
        .footer-nav-item.active{
            color rgb(234,68,90)
            svg path{
                fill rgb(234,68,90)
            }
        }
    }
</style>