<template>
  <div id="app" class="rel">
    <o-nav :routes="routes"></o-nav>
    <div class="logo-wrap fix flex center">
      <a-logo/>
    </div>
    <main :class="{'no-overflow': ui.mediaOverlay.open}" class="rel">
      <a-background/>
      <div class="router-wrap rel">
        <router-view class="p-router-view"></router-view>
        <footer class="abs flex center">
          © Lori Maigné. Tous droits reservés.
        </footer>
      </div>
    </main>


    <!-- <transition></transition> -->
    <o-media-overlay
      v-if="ui.mediaOverlay.open"
      :playlist="ui.mediaOverlay.playlist"
      :selected="ui.mediaOverlay.index"
      :type="ui.mediaOverlay.type"/>



    <!-- <footer></footer> -->
    <div is="style">
    :root{
      --nav-height: {{navHeight}}
    }
  </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    'o-nav': require('./material/nav/o-nav.vue').default,
    'a-background': require('./material/a-background.vue').default,
    'a-logo': require('./material/brand/a-logo.vue').default,
    'o-media-overlay': require('./material/media-player-overlay/o-layout.vue').default,
  },
  mounted(){
    this.$hub.$on('media-overlay', (payload)=>{
      this.ui.mediaOverlay.open = payload.open
      this.ui.mediaOverlay.playlist = payload.playlist
      this.ui.mediaOverlay.index = payload.index
      this.ui.mediaOverlay.type = payload.type
      console.log("yahe")
    })
  },
  data () {
    return {
      routes: require('@/router/routes.js').default,
      navHeight: require('@/store/static/design.js').default.dimensions.navHeight,
      ui: {
        mediaOverlay: {
          open: false,
          media: null,
          index: null,
          type: null,
        },
      }
    }
  }
}
</script>
<style lang="less">
@import url("../assets/css/style.less");
@import url("../assets/css/components.less");
html{
  background-color: #070707;
}
main{
  position: fixed; top:0;right:0;bottom:0;left:0;
  overflow-y: auto;
  height: 100vh;
  &.no-overflow{
    overflow: hidden;
  }
}
.o-nav{
  z-index: 4;
}
.router-wrap{
  z-index: 2;
}
.logo-wrap{
  pointer-events: none;
  z-index: 3;
  top:0;bottom:0;left:0;right:0;
  transform: translate(-49vw,-50vh);
  .a-logo{
    transition: transform .2s;
    transform: scale(.4) translate(50%, 50%) scale(.8);
    width: 420px;
  }
}

footer{
  bottom:0; right:0; left:0;
  font-weight: 400;
  letter-spacing: .4px;
  font-size: 14px;
  height: 36px;
  opacity: .91;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
// footer{
//   height: 60vh;
// }
</style>
