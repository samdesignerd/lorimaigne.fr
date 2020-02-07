<template>
  <div class="p-video">
    <section class ="demoreel parallax-container flex center rel">
      <div class="media-wrap" ref="parallax">
        <!-- <img src="/static/content/illustration/coupleselfie.jpg"/> -->
        <video src="http://lori-maigne-media.s3.amazonaws.com/video/DEMO_REEL-2018.mp4" autoplay muted loop></video>
      </div>
      <div class="controls">
        <a-sound-control></a-sound-control>
      </div>
    </section>
    <section class="content grid">
      <div class="page-wrap flex col">
        <o-grid :data="content" :type="'video'"></o-grid>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "",
  components: {
    "o-grid": require("@/widgets/material/grid/o-layout.vue").default,
    "a-sound-control": require("./a-sound-control.vue").default
  },
  data (){
    return {
      scrollY: 0,
      content: [
        {
          src: 'tafouyt_vision',
        },
        {
          src: 'gerardmer',
        },
        {
          src: 'comete',
        },
        {
          src: 'renault',
        },
        {
          src: 'orange_bank',
          name: '',
          content: 'yahe',
        },
        {
          src: 'desk',
          name: '',
        },
        {
          src: 'write_a_text',
          name: '',
        },
        {
          src: 'g1job',
        },
        {
          src: 'agora',
        },
        {
          src: 'newton',
        },
        {
          src: 'alcimed',
        },
        {
          src: 'colissimo',
        },
        {
          src: 'mondays',
        },
        {
          src: 'tuto_basilic',
        },
        {
          src: 'facteur_de_lespace',
        },
        {
          src: 'enlevement_cactus',
        },
      ]
    }
  },
  created(){
    // this.content = [...this.$content.video].map((item)=>{
    //   if (item.src.split("/").length == 1) item.src = `video/${item.src}/`
    //   return item
    // })

    this.content = this.content.map((item) => {
      if (item.src.split("/").length == 1) item.src = `video/${item.src}/`
      return item
    })

  },
  methods: {
    handlesParallax: function(e){
      let parallaxUnit = window.scrollY * .52
      this.$refs.parallax.style.transform = "translate3d(0, " + parallaxUnit + "px, 0px)"
    },
  },
  mounted(){

    window.addEventListener("scroll", this.handlesParallax)
    console.log("yahe", window.addEventListener)
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.handlesParallax)
  },
  props: []
}
</script>
<style lang="less" scoped>
.p-video{

}
section.demoreel{

}
section.grid{

}
section.parallax-container.demoreel{
  height: 100vh;
  background-color: #111;

  transition: transform .1s linear;
  will-change: transform;
  position: relative;
  overflow: hidden;
  height: 100vh;
  &>.parallax{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    &>.media-wrap{
      // transform: translate3d(-50%, 0px, 0px);
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100vw;
      min-width: 100%;
      min-height: 100%;
    }
  }
}
section.content{
  // background-color: #fff;
}
.page-wrap{
  align-items: center;
  padding-top: var(--nav-height)
}




</style>
