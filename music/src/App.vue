<template>
    <router-view id="root"></router-view>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title:'my music',
    meta:[
      {
        charset: 'utf-8'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'
      }
    ]
  },
  mounted() {
    document.querySelector("html").style.overflow = "hidden";
    document.addEventListener('touchmove',this.stopDefault,{passive: false});
  },
  methods: {
    stopDefault(e){
      if(e && e.preventDefault){
        e.preventDefault();
      }else{
        window.event.returnValue = false;
      }
    }
  },
}
</script>
<style lang="stylus">
  html,body{
    -webkit-font-smoothing: antialiased
    font-family sans-serif
    margin 0
    padding 0
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  }
</style>