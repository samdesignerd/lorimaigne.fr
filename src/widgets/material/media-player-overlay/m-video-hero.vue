<template>
  <div class="video-player">
    <video autoplay loop muted class="spread" :src="src" ref="video"></video>
    <video-controls class="video-controls fix"
          :mute="mute" :play="play" :progress="progress"
          @toggle-sound="toggleSound"
          @toggle-play="togglePlay"
          @time-travel="handleTimeTravel"
          />
  </div>
</template>
<script>
export default {
  name: "",
  props: ['src'],
  components: {
    "video-controls": require("./m-video-controls.vue").default
  },
  mounted(){
    this.videoElement = this.$refs["video"]
    this.initTimeFlow()
  },
  methods: {
    toggleSound: function(mute){
      this.videoElement.muted = mute
      this.mute = mute
    },
    togglePlay: function(play){
      this.play = play
      return play ? this.videoElement.play() : this.videoElement.pause()
    },
    handleTimeTravel: function(progress){
      this.progress = progress
      this.videoElement.currentTime = progress * this.videoElement.duration
    },
    initTimeFlow: function(){
      setInterval(this.handleTimeFlow, 10)
    },
    handleTimeFlow: function(){
      if (this.play) {
        this.progress = this.videoElement.currentTime / this.videoElement.duration
      }
    }
  },
  watch: {
    'src': function(){
      this.play = true
      this.progress = 0
    }
  },
  data () {
    return {
      videoElement: null,
      progress: 0,
      mute: true,
      play: true,
    }
  }
}
</script>
<style lang="less" scoped>
.video-controls{
  top:18px;
  left: 150px;
}
</style>
