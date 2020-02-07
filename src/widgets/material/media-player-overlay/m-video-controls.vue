<template>
  <div class="box flex">
    <div @click="togglePlay">
      <svg v-if="play" viewBox="0 0 24 24" class="icon pause">
        <line x1="8" x2="8" y1="6" y2="18"></line>
        <line x1="16" x2="16" y1="6" y2="18"></line>
      </svg>
      <svg v-else viewBox="0 0 24 24" class="icon play">
        <polygon points="9,7 9,17 17,12"></polygon>
      </svg>
    </div>
    <svg viewBox="0 0 208 24" class="icon timeline" @mousedown="handleTimeTraveling">
      <line class="continous" y1="12" y2="12" x1="4" x2="204"/>
      <line class="progress" y1="12" y2="12" x1="4" :x2="cursorX"/>
      <line class="cursor" :x1="cursorX" :x2="cursorX" y1="9" y2="15"/>
    </svg>
    <svg viewBox="0 0 25 25" class="icon sound" @click="toggleSound" :class="{mute: mute}">
      <!-- <line y1="18" y2="15" x1="8" x2="8" ></line>
      <line y1="18" y2="11" x1="13" x2="13" ></line>
      <line y1="18" y2="8" x1="18" x2="18"  ></line> -->
      <line y1="18" y2="8" x1="8" x2="8" ></line>
      <line y1="18" y2="11" x1="13" x2="13" ></line>
      <line y1="18" y2="15" x1="18" x2="18"  ></line>
    </svg>
  </div>
</template>
<script>
export default {
  name: "video-controls",
  props: ['mute', 'play', 'progress'],
  computed: {
    cursorX: function(){
      return this.progress * 200 + 4
    }
  },
  methods: {
    toggleSound: function(){
      this.$emit("toggle-sound", !this.mute)
    },
    togglePlay: function(){
      this.$emit("toggle-play", !this.play)
    },
    handleTimeTraveling: function(e){
      this.$emit('time-travel', ((e.layerX - 28) / (235 - 28)).toFixed(2))
    },
    actualizeProgressBar: function(){},
  },
}
</script>
<style lang="less" scoped>
.box{
  // width: 200px;
  background-color: rgba(255,255,255,.7)
}
svg{
  padding: 3px;
  stroke-width: 3px;
}
svg.pause{
  // background-color: rgba(0,0,0,.2);
}
svg.play{
  fill: #1d1d1d;
}
svg.timeline{
  padding: 0;
  line.progress{
    stroke: var(--main-orange);
    // stroke: var(--main-blue);
  }
  line.continous{
    stroke: #d7d7d7;
    stroke: var(--main-blue);
    opacity: .3;
  }
  line.cursor{
    stroke-width: 5px;
  }
}
svg.sound{
  stroke-width: 3px;
  &.mute{
    opacity: .4;
  }
}
</style>
