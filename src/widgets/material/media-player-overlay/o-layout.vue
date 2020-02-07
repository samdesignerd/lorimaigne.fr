<template>
  <div class="m-media-overlay fix">
    <article :class="{'noscroll': !playlist[index].content}">
      <section class="hero">
        <div v-if="type == 'img'" class="picture spread"
        ref="backgroundImage"
        :index="index"
        :style="{backgroundImage: `url(${$mediaSrc}${playlist[index].src})`}">
        </div>
        <div v-else-if="type == 'video'" class="spread rel">
          <video-player class="spread"
             :src="`${$mediaSrc}${playlist[index].src}video.mp4`"
             />
        </div>
        <div v-else>
          yahe
        </div>
    </section>
    <section v-if="playlist[index].content"></section>
    </article>

    <div class="controls fix flex">
      <div class="box flex">
        <svg viewBox="0 0 24 24" class="back icon"
          @click="$hub.$emit('media-overlay', {open: false})">
          <polyline points="9 14 4 9 9 4"></polyline>
          <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
        </svg>
      </div>
      <div class="box flex">
        <svg viewBox="0 0 24 24" class="previous icon" @click="previous()">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <hr/>
        <svg viewBox="0 0 24 24" class="next icon" @click="next()">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['playlist', 'selected', 'type'],
  components: {
    "video-player": require('./m-video-hero.vue').default
  },
  created(){
    this.index = JSON.parse(JSON.stringify(this.selected))
    window.addEventListener("keydown", this.handleKeydownEvent)
    console.log("creating..", this.index, this.playlist.length, this.playlist[this.index].src)

  },
  beforeDestroy(){
    window.removeEventListener("keydown", this.handleKeydownEvent)
    console.log("destroying..")
  },
  methods: {
    handleKeydownEvent(e){
      switch(e.key){
        case "ArrowRight":
        this.next()
        break
        case "ArrowLeft":
        this.previous()
        break
      }
    },
    next(){
      this.index = (this.index + 1 + this.playlist.length) % this.playlist.length
    },
    previous(){
      this.index = (this.index - 1 + this.playlist.length) % this.playlist.length
    }
  },
  watch: {
    'index': function(){
      this.$el.querySelector("article").scrollTo(0,0)
    }
  },
  data() {
    return {
      ui: {
        fullscreen: false
      },
      index: null,
    }
  }
}
</script>
<style lang="less" scoped>
.m-media-overlay{
  top:0;right:0;left:0;
  height: 100vh;
  z-index: 7;
}
article{
  overflow-y: auto;
  height: 100vh;
  &.noscroll{
    overflow-y: hidden;
  }
}
section{
  height: 100vh;
  width: 100vw;
  background-color: #faffff;
}



section.hero{
  height: 100vh;
  width: 100vw;
  // padding: 0 40px;
  background-color: #070707;

}

.picture{
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

svg.close{
  padding: 0px;
  width: 36px;
  stroke: #777;
  top: 0; right: 0;
  margin: 8px;
}

.controls{
  .box{
    &:first-of-type{
      padding: 4px;
      margin-right: 12px;
    }
    hr{
      height: 62%;
      border: none;
      width: 1px;
      background-color: #777;
    }
  }
  top: 0; left: 0;
  margin: 18px 20px;
  svg.icon{
    stroke-width: 1.5px;
    stroke: #000;
    padding: 4px;
    &.back{
      padding: 5px;
    }
  }
}
</style>
